const express = require("express")
const router = express.Router();
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
    const newVid = {
        id:uuid(),
        title:title,
        channel:"MTV",
        image:"./images/Upload-video-preview.jpg",
        description:description,
        views:"1,001,023",
        likes:"110,985",
        duration:"4:01",
        comments:[{id:"35bba08b-1b51-4153-ba7e-6da76b5ec1b9",name:"Micheal Lyons",comment:"They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.","likes":0,"timestamp":1628522461000}]
        
    }
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