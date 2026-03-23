import express from "express";

const app = express();

const date = new Date();

app.get("/healthcheck", (req, res) => {
  return res.status(200).json("UP", date);
});

app.listen(4000, () => {
  console.log("Server Started");
});
