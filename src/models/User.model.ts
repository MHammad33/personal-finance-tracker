import mongoose, { Document } from "mongoose";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../utils/config";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  createJWT(): string;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

userSchema.set("toJSON", {
  transform: (document, returnedObj) => {
    returnedObj.id = returnedObj._id.toString();

    delete returnedObj._id;
    delete returnedObj.__v;
    delete returnedObj.password;
  }
});

userSchema.pre("save", async function () {
  const salt = await bcryptjs.genSalt(10);
  this.password = await bcryptjs.hash(this.password, salt);
});

userSchema.methods.createJWT = function () {
  const userForToken = {
    username: this.username,
    userId: this._id
  };
  const token = jwt.sign(userForToken, config.JWT_SECRET_KEY, {
    expiresIn: config.JWT_SECRET_LIFETIME
  });
  return token;
};

userSchema.methods.comparePassword = async function (
  candidatePassword: string
) {
  return bcryptjs.compare(candidatePassword, this.password);
};

userSchema.index({ email: 1 });

const User = mongoose.model<IUser>("User", userSchema);

export default User;
