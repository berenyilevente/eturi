import express from "express";
import {
  getClothes,
  addClothes,
  getClothesById,
  updateClothes,
  deleteClothes,
  likeClothes,
  getClothesBySearch,
  filterClothes,
} from "../controllers/clothesController.js";
import authMiddleware from "../middleware/authMiddleware.js";
const router = express.Router();

//specify in a callback what should happen, when someone visits localhost:5000/
router.get("/search?", getClothesBySearch);
router.get("/", getClothes);
router.get("/", getClothesById);
router.post("/", authMiddleware, addClothes);
router.patch("/:id", authMiddleware, updateClothes);
router.delete("/:id", authMiddleware, deleteClothes);
router.patch("/:id/likeClothes", authMiddleware, likeClothes);
router.get("/filter?", filterClothes);

export default router;
