const express = require("express"); 
const router = express.Router();

const {register, members} = require('../controller/auth-controller')

router.route("/submit").post(register)
// router.post("/submit", router);
router.route("/getdata").get(members);

module.exports = router;