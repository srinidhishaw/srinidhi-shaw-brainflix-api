const express = require("express")
const router = express.Router();
// const video = require("../data/videos.json")
const fs = require("fs");

const vid = fs.readFileSync("./data/videos.json")
const vidParsed = JSON.parse(vid);
// let vidList = []
//     video.map(item=>{
//         let obj={
//             id: item.id,
//             title: item.title,
//             channel: item.channel,
//             image: item.image
//         };
//         vidList.push(obj)
//     })
router.get("/",function(req,res){
    
    res.send(vidParsed)

})

router.post("/",function(req,res){
    const {title, description} = req.body;
    const img = app.use(express.static("../public/images/Upload-video-preview.jpg"))
    const newVid = {
        id:uuid(),
        title:title,
        description:description,
        image:img
    }
    vidParsed.push(newVid)
    const vidUpdated = JSON.stringify(vidParsed);
    fs.writeFileSync("./data/videos.json",vidUpdated)

    res.status(201).json(newVid)
})

router.get("/:id",function(req,res){
    const id = req.params.id
    const obj = vidParsed.find(vid => vid.id===id)
    res.send(obj)
})

module.exports = router;