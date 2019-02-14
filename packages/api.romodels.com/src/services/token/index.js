import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../../config';

export default {
  signToken: async user => {
    try {
      // Await & return signed JSON web token
      return await jwt.sign({
        iss: 'TsukiSystems',
        sub: user.id,
        iat: new Date().getTime(), // Current Date
        exp: new Date().setDate(new Date().getDate() + 1) // Current Date + 1 Day
      }, JWT_SECRET);

    } catch (error) {
      throw error;
    }
  }
}