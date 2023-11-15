const express = require("express")
const router = express.Router()

const usercontroller = require("../controllers/user")

router.get("/user/login",usercontroller.index) // show login form
router.post("/user/login",usercontroller.login) // process login
router.get("/user/register",usercontroller.register_form) // show register form
router.post("/user/register",usercontroller.register_process) // process register form

module.exports = router