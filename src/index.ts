import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import { homeRoute, signupRoute, loginRoute, contentRoute, adsRoutes } from "./routes";
// import { homeRoute, signupRoute } from "./routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.set('view engine', 'ejs');

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
