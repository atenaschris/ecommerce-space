import express from "express";
import data from "./data.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});
app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/api/products/:id", (req, res) => {
    console.log( typeof(req.params.id));
  const filteredProduct = data.products.find((el) => el._id === +req.params.id);

  console.log(filteredProduct);
  if (filteredProduct) {
    res.send(filteredProduct);
  } else {
    res.status(404).send({ message: "Product not found!!" });
  }
});

const port = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log(`Serve at http://localhost:${port}`);
});
