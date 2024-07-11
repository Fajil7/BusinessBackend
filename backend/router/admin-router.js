const express = require("express");
const {admin, login} = require("../controller/admin-controller");


const router = express.Router();


router.route("/submit").post(admin)

router.route("/login").post(login);

module.exports = router;
