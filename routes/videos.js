const express = require("express")
const router = express.Router();
// const video = require("../data/videos.json")
const fs = require("fs");
const{v4:uuid} = require("uuid")



router.get("/",function(_req,res){
    const vid = fs.readFileSync("./data/videos.json")
const vidParsed = JSON.parse(vid);
    
    res.send(vidParsed)

})

router.post("/",function(req,res){
    const vid = fs.readFileSync("./data/videos.json")
const vidParsed = JSON.parse(vid);
    const {title, description} = req.body;
    const img = express.static("./images/Upload-video-preview.jpg")
    const newVid = {
        id:uuid(),
        title:title,
        description:description,
        image:img
    }
    console.log(newVid)
    vidParsed.push(newVid)
    const vidUpdated = JSON.stringify(vidParsed);
    fs.writeFileSync("./data/videos.json",vidUpdated)
    res.send(vidParsed)
    res.status(201)
    
})

router.get("/:id",function(req,res){
    const vid = fs.readFileSync("./data/videos.json")
const vidParsed = JSON.parse(vid);
    const id = req.params.id
    const obj = vidParsed.find(vid => vid.id===id)
    res.send(obj)
})

module.exports = router;