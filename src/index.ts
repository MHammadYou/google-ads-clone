import express from "express";
import dotenv from "dotenv";
import path from "path";
import mongoose from "mongoose";

import { homeRoute, signupRoute, loginRoute, contentRoute, adsRoutes } from "./routes";
// import { homeRoute, signupRoute } from "./routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const VIEWS_DIR = path.join(__dirname, "../public");


app.set('view engine', 'ejs');
app.set('views', VIEWS_DIR);

// const mongoURI = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000";
//
// mongoose.connect(mongoURI)
//   .then(() => console.log("Connection established"))
//   .catch(err => console.log(err));

app.use(express.json());

app.use('/', homeRoute);
app.use('/', signupRoute);
app.use('/', loginRoute);
app.use('/', contentRoute);
app.use('/ads', adsRoutes);


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
