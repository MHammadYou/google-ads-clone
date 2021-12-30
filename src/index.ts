import express from "express";
import dotenv from "dotenv";
import path from "path";
const MongoClient = require('mongodb').MongoClient;

import { homeRoute, signupRoute, loginRoute, contentRoute } from "./routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const mongoURI = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000";

MongoClient.connect(mongoURI, (err, client) => {
  client.close();
});

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.use('/', homeRoute);
app.use('/', signupRoute);
app.use('/', loginRoute);
app.use('/', contentRoute);


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
