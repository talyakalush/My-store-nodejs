import express from "express";
import apiRouter from "./routes/api.router.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const API_KEY = "25540812-faf2b76d586c1787d2dd02736";
const BASE_URL = `https://pixabay.com/api/?key=${API_KEY}&q=`;

let app = express();
app.use(cors());

app.use("/api", apiRouter);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

export default app;
