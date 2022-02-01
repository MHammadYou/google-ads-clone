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
app.use(express.static('static'));
//
// app.use((req, res, next) => {
//   console.log('static');
//   next();
// })

app.use('/', homeRoute);
app.use('/users/', signupRoute);
app.use('/users/', loginRoute);
app.use('/', contentRoute);
app.use('/ads', adsRoutes);

app.use((req, res) => {
  res.status(404).send("No content on this route")
})


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
