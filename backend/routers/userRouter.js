import express from "express";
import User from "../models/userModel.js";
import data from "../data.js";
import expressAsyncHandler from "express-async-handler";
import bcrypt from 'bcryptjs';
import { generateToken } from "../utils.js";

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

userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: "Non esiste nessun account con le credenziali fornite. Email o Password non corrette" });
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

userRouter.delete(
  "/:id/delete",
  expressAsyncHandler(async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.send({ message: "User deleted successfully!!!" });
  })
);

userRouter.put(
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
