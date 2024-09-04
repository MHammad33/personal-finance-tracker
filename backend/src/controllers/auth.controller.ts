import { Request, Response } from "express";
import User from "../models/User.model";

const register = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const user = new User({ username, email, password });
  await user.save();
  res.status(201).json({ message: "User registered successfully" });
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  const token = user.createJWT();
  res.status(200).json({ token, username: user.username });
};

export default {
  login,
  register
};
