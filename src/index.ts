import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import { homeRoute, signupRoute, loginRoute, contentRoute, adsRoutes } from "./routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.static('static'));
app.use(express.urlencoded({extended: true}));

app.use('/', homeRoute);
app.use('/users/', signupRoute);
app.use('/users/', loginRoute);
app.use('/', contentRoute);
app.use('/ads', adsRoutes);

app.use((req, res) => {
  res.status(404).send("No content on this route")
})


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
