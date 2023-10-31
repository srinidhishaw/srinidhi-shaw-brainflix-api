const express = require("express")

const router = express.Router();
const video = require("../data/videos.json")
let vidList = []
    video.map(item=>{
        let obj={
            id: item.id,
            title: item.title,
            channel: item.channel,
            image: item.image
        };
        vidList.push(obj)
    })
router.get("/",function(req,res){
    
    // const vids = JSON.parse(video)
    
    
    res.send(vidList)
    // fs.writeFileSync("./data/videos.json")
})

router.get("/:id",function(req,res){
    const id = req.params.id
    const obj = video.find(vid => vid.id===id)
    res.send(obj)
})

module.exports = router;