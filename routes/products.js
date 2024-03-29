const expresss = require("express");

const router = expresss.Router();

const {getResponse,getAllProduct,getQueryProduct} = require("../controllers/product")

router.route("/").get(getResponse);
router.route("/product").get(getAllProduct);
router.route("/search").get(getQueryProduct);


module.exports = router;