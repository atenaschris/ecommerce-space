import express from "express";
import mongoose from "mongoose";
import data from "./data.js";
import userRouter from "./routers/userRouter.js";

const app = express();

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/space");

app.get("/", (req, res) => {
  res.send("Server is ready");
});
app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/api/products/:id", (req, res) => {
  console.log(typeof req.params.id);
  const filteredProduct = data.products.find((el) => el._id === +req.params.id);

  console.log(filteredProduct);
  if (filteredProduct) {
    res.send(filteredProduct);
  } else {
    res.status(404).send({ message: "Product not found!!" });
  }
});

app.use("/api/users", userRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log(`Serve at http://localhost:${port}`);
});
