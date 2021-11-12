import express from "express";
import mongodb from "mongodb";
import dotenv from "dotenv";

import { homeRoute } from "./routes/index";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/', homeRoute);


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));