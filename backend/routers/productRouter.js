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

productRouter.post(
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
      res.send(singleProduct);
    }
  })
);

productRouter.delete(
  "/:id/delete",
  expressAsyncHandler(async (req, res) => {
    await Product.findOneAndDelete(req.params.id);
    res.status(200).send({ message: "Product deleted successfully!!!!" });
  })
);

productRouter.put(
  "/:id/update",
  expressAsyncHandler(async (req, res) => {
    const productToUpdate = await Product.findOneAndUpdate(
      req.params.id,
      {
        name: "Gianna",
      },
      {
        new: true,
      }
    );
    if (productToUpdate) {
      res.send(productToUpdate);
    } else {
      res.status(404).send({ message: "Cannot update the given user " });
    }
  })
);

export default productRouter;
