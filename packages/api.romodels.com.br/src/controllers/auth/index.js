import passport from 'passport';
import { EmailService, UserService, JwtService } from '../../services';
require('./Strategy');

export default {
  jwtAuth: passport.authenticate('jwt', { session: false }),
  localAuth: passport.authenticate('local', { session: false }),

  confirmEmailCallback: redis => {
    return async (req, res, next) => {
      try {
        const { id } = req.params;
        const userId = await redis.get(id);

        if (userId !== null) {
          if (!(await UserService.confirmUser(userId))) {
            redis.del(id);
            res.status(200).json({
              payload: {
                message: `Users-Controller handling CONFIRMATION ROUTE GET request to ${req.baseUrl}`
              }
            });
            return;
          }
        } else {
          res.status(409).json({
            payload: {
              message: `Confirmation link is not valid!`
            }
          });
        }
      } catch (error) {
        next(error);
      }
    };
  },

  // Register Controller Middleware
  register: redis => {
    return async (req, res, next) => {
      try {
        if (!req.is('application/json')) {
          return next(new Error("Expected 'application/json'"));
        }

        const payload = req.value.body;
        const result = await UserService.createUser(payload);

        // Check if result undefined then "User" already exists, handle accordingly.
        // UserService.createUser(@param) explicity returnes undefined if there already exists a user with that Username or Email!
        if (result === undefined) {
          res.status(409).json({
            payload: {
              message: 'Username/Email already in use'
            }
          });
        } else {
          const url = (req.protocol + '://' + req.get('host') + req.baseUrl + '/').toString();
          const link = await EmailService.genConfirmationEmailLink(url, result, redis);

          console.log('payload', payload);
          console.log('result', result);

          await EmailService.sendConfirmationEmail(payload.email, link);

          console.log('url', url);
          console.log('link', link);

          // // Else valid User was created/updated sign and return JWT Token to client.
          // const token = await UsersService.signToken(result);

          res.status(201).json({
            payload: {
              message: 'You have registered successfully! Please confirm your email before logging into your account!'
            }
          });
        }
      } catch (error) {
        next(error);
      }
    };
  },

  // Login Controler Middleware
  login: async (req, res, next) => {
    try {
      if (req.user.profile.confirmed !== true) {
        res.status(401).json({
          payload: {
            message: 'Please confirm your E-mail!'
          }
        });
        return;
      }

      const token = await JwtService.signToken(req.user);

      res.status(200).json({
        payload: {
          message: `Users-Controller handling login POST request to ${req.baseUrl}`,
          token: token
        }
      });
    } catch (error) {
      next(error);
    }
  },

  resendEmailConfirmationCallback: redis => {
    return async (req, res, next) => {
      try {
        if (!req.is('application/json')) {
          return next(new Error("Expected 'application/json'"));
        }

        const payload = req.value.body;
        const result = await UserService.findByEmail(payload);

        console.log('payload', payload);
        console.log('result', result);

        const url = (req.protocol + '://' + req.get('host') + req.baseUrl + '/').toString();
        const link = await EmailService.genConfirmationEmailLink(url, result, redis);

        await EmailService.sendConfirmationEmail(payload.email, link);

        console.log('url', url);
        console.log('link', link);

        res.status(201).json({
          payload: {
            message: 'Email sent! Please check your email!'
          }
        });
      } catch (error) {
        next(error);
      }
    };
  }
};
