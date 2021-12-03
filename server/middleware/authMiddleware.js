import jwt from "jsonwebtoken";
import dotenv from "dotenv";

//next: do something and then move to the next thing => if the request passes the tests in the middleware, then we go to the NEXT action
const authMiddleware = async (req, res, next) => {
  dotenv.config();

  try {
    //check if the user is really who he is claiming to be with jwt
    //after signup, user gets a token: we have to check before each action (update, delete clothes) if the token is valid
    //split the header and get the token from the first position of the array
    const token = req.headers.authorization.split(" ")[1];

    //2 kinds of tokens: google and our own: if the length is greater then 500, then its google auth
    const isCustomAuth = token.length < 500;

    //get the data from the token itself
    let decodedData;

    if (token && isCustomAuth) {
      //this is going to give us the data from each specific token (username, id)
      decodedData = jwt.verify(token, process.env.SECRET);
      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);
      //sub= is googles name for id to differentiate every single user
      req.userId = decodedData?.sub;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

export default authMiddleware;
