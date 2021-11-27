import express from "express";
import {
  getClothes,
  addClothes,
  updateClothes,
} from "../controllers/clothesController.js";

const router = express.Router();

//specify in a callback what should happen, when someone visits localhost:5000/
router.get("/", getClothes);
router.post("/", addClothes);
router.patch("/:id", updateClothes);

export default router;
