import express from "express";
import mongoose, { Mongoose } from "mongoose";
import cors from "cors";
import router from "./routes/loginRoutes.js"; 

import { PORT, mongoDBURL } from "./config.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/login", router);


mongoose.connect(mongoDBURL).
then(()=>{
  console.log("Database connection: Successful");
  app.listen(PORT, ()=>{
    console.log(`Application status: Running\nPORT: ${PORT}`);
  })
}).
catch(err=>console.log(err.message))


