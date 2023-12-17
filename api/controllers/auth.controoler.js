import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const signUp = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashsync(password, 10);
  const user = new User({ username, email, password: hashedPassword });
  try {
    await user.save();
    res.status(201).json({
      success: true,
      message: "user created suuccessfully",
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
