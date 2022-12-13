const express = require("express")
const { uploadImage } = require("../controllers/uploadsController")
const router = express.Router()

router.route("/").post(uploadImage)

module.exports = { uploadsRouter: router }
