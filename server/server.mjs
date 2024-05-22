import express from "express";
import cors from "cors";

import mongodb from "mongodb";
const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(() => {
  console.log(`Server is running`);
});
