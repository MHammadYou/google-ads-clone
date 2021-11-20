import express from "express";
import mongodb from "mongodb";
import dotenv from "dotenv";
import path from "path";

import { homeRoute, signupRoute, loginRoute } from "./routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.use('/', homeRoute);
app.use('/users/', signupRoute);
app.use('/users/', loginRoute);


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
