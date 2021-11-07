import express from "express";
import dotenv from "dotenv";

import indexRouter from "./routes/index";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use('/', indexRouter);


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));