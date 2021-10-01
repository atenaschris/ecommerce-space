import express from "express";
import User from "../models/userModel.js";
import data from "../data.js";
import expressAsyncHandler from "express-async-handler";

const userRouter = express.Router();

userRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const users = await User.find({});
    if (users) {
      res.send(users);
    } else {
      res.status(404).send({ message: "There are no users Here!!!!" });
    }
  })
);

userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send(createdUsers);
  })
);

userRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const userDetail = await User.findById(req.params.id);
    if (!userDetail) {
      res.status(404).send({ message: "The user does not exists!!!" });
    } else {
      res.send(userDetail);
    }
  })
);

userRouter.get(
  "/:id/delete",
  expressAsyncHandler(async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.send({ message: "User deleted successfully!!!" });
  })
);

userRouter.get(
  "/:id/update",
  expressAsyncHandler(async (req, res) => {
    const userToUpdate = await User.findOneAndUpdate(
      req.params.id,
      {
        name: "Gianna",
      },
      {
        new: true,
      }
    );
    if (userToUpdate) {
      res.send(userToUpdate);
    } else {
      res.status(404).send({ message: "Cannot update the given user " });
    }
  })
);

export default userRouter;
