const express = require("express")
const fs = require("fs");
const app=express()
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