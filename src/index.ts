import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import session from "express-session";

import handleRoutes from "./routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const DB_URI = "mongodb://127.0.0.1:27017/ads-test-db";

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.static('static'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: `${process.env.SECRET_KEY}`,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 },
    resave: false,
  })
);

mongoose.connect(DB_URI,  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false } )
  .then(res => {
    console.log("Connected to the database");
    app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
  })
  .catch(err => {
    console.log(err);
  })


handleRoutes(app);

app.use((req, res) => {
  res.status(404).send("No content on this route")
});
