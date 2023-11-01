const express = require("express")
// const fs = require("fs");
const cors = require("cors")
require("dotenv").config();
const app=express()
app.use(cors({origin:process.env.FRONTEND_URL}))
function logRequestInfo(req, res, next) {
    console.log(`Request received at ${new Date()} for path: ${req.path}`);
    next();
  }
  app.use(logRequestInfo);
app.listen(8080, function(){
    console.log("listening on port 8080")
})
const vidRoute = require("./routes/videos")
app.use("/videos",vidRoute)
// app.get("/videos",function(req,res){
//     res.send("hi")
// })