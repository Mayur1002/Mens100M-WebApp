const express = require('express')
const mongoose  = require('mongoose')

const menSchema = new mongoose.Schema({
    ranking:{
        type:Number,
        required:true,
        unique:true,
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    dob:{
        type:Date,
        required:true,
        trim:true
    },
    country:{
        type:String,
        required:true,
        trim:true
    },
    score:{
        type:Number,
        required:true,
        trim:true
    },
    event:{
        type:String,
        defalut:"100m",
    },
})

// Creating a New Collection
const MensRanking = new mongoose.model("MenRanking",menSchema)

module.exports = MensRanking