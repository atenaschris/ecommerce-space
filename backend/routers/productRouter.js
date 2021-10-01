import express from "express";
import Product from "../models/productModel.js";
import data from "../data.js";
import expressAsyncHandler from "express-async-handler";

const productRouter = express.Router();

productRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const allProducts = await Product.find({});
    res.send(allProducts);
  })
);

productRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    /* await Product.remove({}); */
    const insertedProducts = await Product.insertMany(data.products);
    res.send(insertedProducts);
  })
);

productRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const singleProduct = await Product.findById(req.params.id);
    if (!singleProduct) {
      res.status(404).send({ message: "Product not found!!!" });
    } else {
      res.send( singleProduct );
    }
  })
);

export default productRouter;
