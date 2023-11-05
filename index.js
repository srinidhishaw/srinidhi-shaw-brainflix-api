const express = require("express")
// const fs = require("fs");
const cors = require("cors")

require("dotenv").config();
const PORT = process.env.PORT || 8080;

const app=express()
app.use(express.json());
app.use(express.static("public"));
app.use(cors({origin:process.env.FRONTEND_URL}))

function logRequestInfo(req, res, next) {
    console.log(`Request received at ${new Date()} for path: ${req.path}`);
    next();
  }
  app.use(logRequestInfo);

const vidRoute = require("./routes/videos")
app.use("/videos",vidRoute)

app.listen(PORT, function(){
  console.log("listening on port 8080")
})
