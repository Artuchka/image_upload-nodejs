const { Products } = require("../models/productModel")
const path = require("path")

const uploadImage = async (req, res) => {
	console.log(req.files)
	const file = req.files.image
	const { name } = file
	const uploadPath = path.join(__dirname, "../public", name)

	file.mv(uploadPath, (err) => {
		if (err) {
			return res.status(500).send(err)
		}

		res.send("File uploaded!")
	})

	// res.json({
	// 	msg: "all good, created",
	// })
}

module.exports = { uploadImage }
