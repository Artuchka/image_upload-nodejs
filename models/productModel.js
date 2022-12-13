const { default: mongoose } = require("mongoose")

const ProductSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	company: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
})

const ProductModel = mongoose.model("Product", ProductSchema)

module.exports = { Products: ProductModel }
