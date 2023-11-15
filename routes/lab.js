const express = require("express")
const router = express.Router()

const labcontroller = require("../controllers/lab")

router.get("/lab",labcontroller.index)

module.exports = router