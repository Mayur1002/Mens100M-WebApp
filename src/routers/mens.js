const express = require('express')
const router = new express.Router();

const MensRanking = require("../models/mens")

// Handling the post request
router.post("/mens",async(req,res)=>{
    try{
        const addingMensRecords = new MensRanking(req.body)
        console.log(req.body);
        const insertData = await addingMensRecords.save()
        res.send(insertData)
    }catch(e){
            res.send(e)
    }
})

// We will handle the get request

router.get("/mens",async(req,res)=>{
    try{
        const getmens= await MensRanking.find({}).sort({"ranking":1})
        res.send(getmens)
    }catch(e){
        res.status(400).send(e)
    }
})

//  We will handle get req of individual 
router.get("/mens/:id",async(req,res)=>{
    try{
        const _id = req.params.id
        const getmen= await MensRanking.findById({_id})
        res.send(getmen)
    }catch(e){
        res.status(400).send(e)
    }
})

// handling patch request to update data

router.patch("/mens/:id",async(req,res)=>{
    try{
        const _id = req.params.id
        const getmen= await MensRanking.findByIdAndUpdate(_id,req.body,{
            new:true
        })
        res.send(getmen)
    }catch(e){
        res.status(500).send(e)
    }
})


// handling delete request of individual
router.delete("/mens/:id",async(req,res)=>{
    try{
        const _id = req.params.id
        const getmen= await MensRanking.findByIdAndDelete(req.params.id)
        res.send(getmen)
    }catch(e){
        res.status(500).send(e)
    }
})


module.exports = router