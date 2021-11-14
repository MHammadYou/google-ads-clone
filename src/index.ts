import express from "express";
import mongodb from "mongodb";
import dotenv from "dotenv";

import { homeRoute, signupRoute } from "./routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/', homeRoute);
app.use('/users/', signupRoute);


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));