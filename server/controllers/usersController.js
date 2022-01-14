import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModel from "../models/userModel.js";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import crypto from "crypto";

dotenv.config();
const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_SENDER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendConfirmationEmail = (name, email, confirmationCode) => {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  transport
    .sendMail({
      from: process.env.EMAIL_SENDER,
      to: email,
      subject: "Email megerősítése",
      html: `<h2>Szia ${name}</h2>
          <p>Kérjük, erősítsd meg e-mail címedet a következő linkre kattintva</p>
          <a href=https://eturi-app.netlify.app/confirm/${confirmationCode}> Kattints ide</a>
          </div>`,
    })
    .catch((err) => console.log(err));
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  dotenv.config();

  try {
    const existingUser = await UserModel.findOne({ email });
    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist." });
    if (existingUser.status != "Active") {
      return res.status(401).send({
        message: "Pending Account. Please Verify Your Email!",
      });
    }
    //Check if passwords match by using bcrypts compare method
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials." });

    //If user exists and pw is correct, then we can get the json web token that we need to send to the frontend
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.SECRET,
      { expiresIn: "1h" }
    );
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const signUp = async (req, res) => {
  dotenv.config();

  const { email, password, confirmPassword, firstName, lastName } = req.body;
  try {
    //check if user already exists in the database
    const existingUser = await UserModel.findOne({ email });

    if (existingUser)
      return res.status(400).json({ message: "User already exist." });

    if (password !== confirmPassword)
      return res.status(400).json({ message: "Passwords don't match." });

    //before creating we have to hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    const token = jwt.sign(
      { email: email, firstName: firstName },
      process.env.SECRET,
      {
        expiresIn: "1h",
      }
    );

    const verifyUserCode = crypto.randomBytes(40).toString("hex");
    console.log(verifyUserCode);

    const result = await UserModel.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
      confirmationCode: verifyUserCode,
    });

    sendConfirmationEmail(firstName, result.email, result.confirmationCode);

    res.status(200).json({ result: result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const verifyUser = (req, res) => {
  UserModel.findOne({
    confirmationCode: req.params.confirmationCode,
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      user.status = "Active";
      user.save((err) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
      });
    })
    .catch((e) => console.log("error", e));
};
