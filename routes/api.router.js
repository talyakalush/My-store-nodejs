import express from "express";

import productsRoutes from "./api/productsRoutes.js";
const router = express.Router();

router.use("/products", productsRoutes);

export default router;
