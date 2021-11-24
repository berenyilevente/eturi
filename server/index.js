import express from "express";
import bodyParser from "body-parser";
import mongoose from "express";
import cors from "cors";

const app = express();

//set up bodyParser so it can properly send the requests
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
