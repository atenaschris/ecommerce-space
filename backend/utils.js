import  Jwt  from "jsonwebtoken";

export const generateToken = (user) => {
   return Jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || "something secret",
    {
      expiresIn: "30d",
    }
  );
};
