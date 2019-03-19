import { UserModel } from '../../db/models';

export default {
  createUser: async payload => {
    try {
      const { username, email, password } = payload;

      // Checking if there is already a registered username / email
      const emailCheck = await UserModel.findOne({ 'profile.email': email });

      if (emailCheck) {
        // Check if user doesn't have a password
        if (emailCheck.profile.password === undefined) {
          // return await PassportService.updateGoogleWithPassword(payload);
        } else {
          return undefined; // explicity return undefined!
        }
      } else {
        // Create a new user model using payload
        const newUser = new UserModel({
          profile: {
            username,
            email,
            password
          }
        });

        // Save new user model into DB & return results
        const result = await newUser.save();
        return result._id;
      }
    } catch (error) {
      throw error;
    }
  },

  confirmUser: async userId => {
    try {
      await UserModel.updateOne({ _id: userId }, { 'profile.confirmed': true }, err => {
        console.log('Updating confirmation to true on user' + userId);
        console.log('CONFIRM USER ERROR => ' + err);
        if (err) {
          console.log('CONFIRM USER RETURN => FALSE');
          return false;
        } else {
          console.log('CONFIRM USER RETURN => TRUE');
          return true;
        }
      });
    } catch (error) {
      throw error;
    }
  },

  findByEmail: async ({ email }) => {
    try {
      // Find the user given the email
      const query = await UserModel.findOne({ 'profile.email': email });
      console.log('query', query);

      if (query) {
        return query._id;
      }
    } catch (error) {
      throw error;
    }
  }
};
