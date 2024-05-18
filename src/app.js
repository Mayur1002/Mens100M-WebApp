const express = require("express")
require("../src/db/conn")
const app = express()
const MensRanking = require('../src/models/mens')
const port = process.env.port || 3000
const router = require("../src/routers/mens")

app.use(express.json())

app.use(router)

app.listen(port,()=>{
    console.log(`Connection is live at port np. ${port}`);
})