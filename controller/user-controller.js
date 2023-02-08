import User from "../model/user-schema.js";
import jwt from "jsonwebtoken";
const secretkey = "secretkey";

// creating new user
export const createUserlist = async (request, response) => {
  try {
    const user = request.body;
    const newuser = new User(user);
    await newuser.save();
    return response.status(200).json(newuser);
  } catch (error) {
    return response.status(500).json({ message: error });
  }
};

//user login and return the token
export const getUserLogin = async (request, response) => {
  try {
    const email = request.body.email;
    const password = request.body.password;
    let user = await User.findOne({ email: email, password: password });
    if (user) {
      jwt.sign({ user }, secretkey, { expiresIn: "300s" }, (err, token) => {
        return response.status(200).json({ user: user, token: token });
      });
    } else {
      return response.status(401).json({ message: "Invalid login" });
    }
  } catch (error) {
    return response.status(500).json({ message: error });
  }
};

//fetching user info using token and displaying the user as per pagination vise
export const getUserList = async (request, response) => {
  try {
    jwt.verify(request.token, secretkey, async (error, authData) => {
      if (!error) {
        const { page = 1, limit = 4 } = request.query;
        const users = await User.find()
          .limit(limit * 1)
          .skip((page - 1) * limit);
        return response.status(200).json(users);
      } else {
        return response.status(401).json(error);
      }
    });
  } catch (error) {
    return response.status(500).json({ message: error });
  }
};
