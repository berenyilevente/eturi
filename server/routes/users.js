import express from "express";
import { signIn, signUp, verifyUser } from "../controllers/usersController.js";

const router = express.Router();

router.post("/signin", signIn);
router.post("/signup", signUp);
router.get("/confirm/:confirmationCode", verifyUser);

export default router;
