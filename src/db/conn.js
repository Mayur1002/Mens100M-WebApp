const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/olympics",).then(()=>{
    console.log('Connection Succesfull');
    
}).catch((e)=>{
    console.log('No connection');
})