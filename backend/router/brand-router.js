const express = require("express");
const brands = require("../controller/brands-controller");

const router = express.Router();

router.route("/brand").get(brands)

module.exports = router