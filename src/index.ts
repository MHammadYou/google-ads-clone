import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import { homeRoute, signupRoute, loginRoute, logoutRoute, profileRoute, contentRoute, adsRoutes } from "./routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const DB_URI = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000";

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.static('static'));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(DB_URI,  { useNewUrlParser: true, useUnifiedTopology: true } )
  .then(res => {
    console.log("Connected to the database");
    app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
  })
  .catch(err => {
    console.log(err);
  })


app.use('/', homeRoute);
app.use('/users/', signupRoute);
app.use('/users/', loginRoute);
app.use('/users/', logoutRoute);
app.use('/users/', profileRoute);
app.use('/', contentRoute);
app.use('/ads', adsRoutes);

app.use((req, res) => {
  res.status(404).send("No content on this route")
});
