import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import clothesRoutes from "./routes/clothes.js";
import userRoutes from "./routes/users.js";

const app = express();
dotenv.config();

//set up bodyParser so it can properly send the requests
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//use express middlewear to connect posts to our application
//first parameter: set up the starting path for all the routes inside posts.js
//every route inside the post route will start with post ...
app.use("/clothes", clothesRoutes);
app.use("/user", userRoutes);
//greeting route for the deployed version
app.get("/", (req, res) => {
  res.send("Welcome to eturi API");
});

//will be populated immediately by heroku during deployment
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
