const dotenv = require("dotenv");
const connectDatabase = require("./database/db");
const Myproduct = require("./models/productSchema");
const productJson = require("./product.json");


dotenv.config();

const start = async () => {
    try {
        await connectDatabase(process.env.DB_URL);
        await Myproduct.deleteMany();
        await Myproduct.create(productJson);

        console.log("Products have been successfully created.");
    } catch (error) {
        console.error("Error:", error);
    }
};

start();
