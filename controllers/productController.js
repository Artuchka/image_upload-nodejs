const { Products } = require("../models/productModel")

const getAllProducts = async (req, res) => {
	const products = await Products.find({})

	res.json({
		msg: "all good, all",
		products,
	})
}

const serverURL = "http://localhost:5000"
const createProduct = async (req, res) => {
	const { title, company, image } = req.body
	console.log(req.body)
	const createdItem = await Products.create({
		title,
		company,
		image: `${serverURL}/${image}`,
	})

	res.json({
		msg: "all good, created",
		createdItem,
	})
}

module.exports = { createProduct, getAllProducts }
