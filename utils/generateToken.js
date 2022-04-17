import jwt from "jsonwebtoken";

const generateToken = (id, name, email, isAdmin) => {
  return jwt.sign({ id, name, email, isAdmin }, "JWTPrivateKey", {
    expiresIn: "30d",
  });
};

export default generateToken;
