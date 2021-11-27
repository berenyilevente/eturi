import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/clothes.js";

const app = express();

//set up bodyParser so it can properly send the requests
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//use express middlewear to connect posts to our application
//first parameter: set up the starting path for all the routes inside posts.js
//every route inside the post route will start with post
app.use("/clothes", postRoutes);

//ToDo store connection string in environmental variable
//const CONNECTION_URL = ("mongodb+srv://berenyi_levente:westend6@cluster0.1ilkc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
const CONNECTION_URL = "mongodb://localhost:27017/eturi";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
