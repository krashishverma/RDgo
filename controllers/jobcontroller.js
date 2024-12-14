import { sign } from 'crypto';
import { nanoid } from 'nanoid';
import { async } from 'rxjs';

let data=[
  {id:nanoid(), company:'apple',position:'front-end'},
  {id:nanoid(), company:'google',position:'back-end'},
];

export const signup= async (req, res) => {
    const { country, phone } = req.body;
    if (!country || !phone) {
      return res.status(400).json({ message: "All fields are required!" });
    }
    try {
      const newSignup = new signup({ country, phone });
      await newSignup.save();
      res.status(201).json({ message: "Signup successful!" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }