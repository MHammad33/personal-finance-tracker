import { Request, Response } from "express";
import User, { IUser } from "../models/User.model";

const register = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const userToCreate = { username, email, password };
  const newUser = new User(userToCreate);
  await newUser.save();
  res.status(201).json({ message: "User registered successfully" });
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const userFound = await User.findOne({ email });
  if (!userFound) return handleAuthError(res);

  const isPasswordValid = await userFound.comparePassword(password);
  if (!isPasswordValid) return handleAuthError(res);

  const token = userFound.createJWT();
  res.status(200).json({ token, username: userFound.username });
};

const handleAuthError = (res: Response) => {
  return res.status(401).json({ message: "Invalid username or password" });
};

export default {
  login,
  register
};
