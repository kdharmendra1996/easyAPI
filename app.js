const express = require("express");

const app = express();

const PORT = process.env.PORT || 4000;

const product_routes = require("./routes/products");
const connectDatabase = require("./database/db");
require("dotenv").config()

app.use(express.json());

app.use("/api/myproduct",product_routes);


const start = async()=>{
    try{
        await connectDatabase(process.env.DB_URL);

        app.listen(PORT,()=>{
            console.log(`${PORT} Yes I connected Successfully..`)
        })
    }catch(error){
        console.log(error)
    }
}

start();