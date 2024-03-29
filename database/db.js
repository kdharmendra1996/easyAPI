const mongoose = require("mongoose");



const connectDatabase = (uri)=>{
    mongoose.connect(uri)
    .then(()=>{
        console.log("Database connected successfully")
    })
}

module.exports = connectDatabase;