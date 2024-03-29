const getResponse= (req,res)=>{
    res.status(200).json({
        success:true,
        message:"I am live"
    })
};

const Myproduct = require("../models/productSchema");

const getAllProduct = async (req, res) => {
    try {
        const { brand, title, sort,select} = req.query;
        const queryObject = {};
        if (brand) {
            queryObject.brand = brand;
        }
        if (title) {
            queryObject.title = { $regex: title, $options: "i" };
        }

        let apiData = Myproduct.find(queryObject);
        if (sort) {
            const sortFields = sort.split(",").join(" ");
            apiData = apiData.sort(sortFields);
        }

        if (select) {
            const selectFields = select.split(",").join(" ");
            apiData = apiData.select(selectFields);
        }

        let page = Number(req.query.page) || 1;
        let limit = Number(req.query.limit) || 8;

        let skip = (page -1)*limit;

        apiData = apiData.skip(skip).limit(limit);
        
        console.log(queryObject);
        const products = await apiData;

        res.status(200).json({
            success: true,
            products,
            numOfProducts:products.length,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};


const getQueryProduct = async (req, res) => {
    try {
        const productQuery = await Myproduct.find(req.query);
        res.status(200).json({
            success: true,
            productQuery: productQuery
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};




module.exports = {getResponse,getAllProduct,getQueryProduct}