import express from "express";
import {
  getClothes,
  addClothes,
  getClothesById,
  updateClothes,
  deleteClothes,
  likeClothes,
} from "../controllers/clothesController.js";

const router = express.Router();

//specify in a callback what should happen, when someone visits localhost:5000/
router.get("/", getClothes);
router.get("/", getClothesById);
router.post("/", addClothes);
router.patch("/:id", updateClothes);
router.delete("/:id", deleteClothes);
router.patch("/:id/likeClothes", likeClothes);

export default router;
