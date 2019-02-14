import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = mongoose.Schema(
  {
    profile: {
      username: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
      },
      confirmed: {
        type: Boolean,
        default: false
      }
    } // end profile
  },
  {
    timestamps: true
  }
);

UserSchema.pre('save', async function(next) {
  try {
    this.profile.password = await this.hashPassword(this.profile.password);
    next();
  } catch (error) {
    next(error);
  }
});

UserSchema.methods.hashPassword = async function(password) {
  try {
    // Generate Salt
    const salt = await bcrypt.genSalt(12);

    // Generate a password hash (Salt + Hash)
    const passwordHash = await bcrypt.hash(password, salt);

    // Save hashed password to the model to be stored in DB
    return passwordHash;
  } catch (error) {
    throw new Error(error);
  }
};

UserSchema.methods.isValidPassword = async function(newPassword) {
  try {
    return await bcrypt.compare(newPassword, this.profile.password);
  } catch (error) {
    throw new Error(error);
  }
};

export default mongoose.model('User', UserSchema);
