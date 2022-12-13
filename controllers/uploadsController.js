const { Products } = require("../models/productModel")
const path = require("path")
const cloudinary = require("cloudinary").v2

const fs = require("fs")

const uploadImage = async (req, res) => {
	const file = req?.files?.image
	const tmpPath = file.tempFilePath
	const result = await cloudinary.uploader.upload(tmpPath, {
		use_filename: true,
		folder: "images-nodes-test",
	})
	console.log(result)
	fs.unlinkSync(tmpPath)

	res.status(201).json({
		src: result.secure_url,
	})
}

// const uploadImageLocal = async (req, res) => {
// 	const file = req?.files?.image
// 	console.log(file)
// 	if (!file) {
// 		throw new Error("pls provide the image")
// 	}

// 	if (!file.mimetype.match(/image\//)) {
// 		throw new Error("send only image, nothing else")
// 	}

// 	const maxSize = 1024 * 1024
// 	if (file.size > maxSize) {
// 		throw new Error("big image")
// 	}
// 	const { name } = file
// 	const uploadPath = path.join(__dirname, "../public", name)

// 	file.mv(uploadPath, (err) => {
// 		if (err) {
// 			return res.status(500).send(err)
// 		}

// 		res.send("File uploaded!")
// 	})
// }

module.exports = { uploadImage }
