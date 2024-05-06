import express from "express";
import {
  getAllProductsController,
  getImageByIdController,
  fetchDataController,
  fetchDataLikesController,
} from "../../controllers/productsControllers.js";

const router = express.Router();
router.get("/fetch", fetchDataController);
router.get("/likes", fetchDataLikesController);
router.get("/", getAllProductsController);
router.get("/:id", getImageByIdController);

export default router;
