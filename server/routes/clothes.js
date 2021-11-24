import express from "express";
import { getClothes, addClothes } from "../controllers/clothesController.js";

const router = express.Router();

//specify in a callback what should happen, when someone visits localhost:5000/
router.get("/", getClothes);
router.post("/", addClothes);

export default router;
