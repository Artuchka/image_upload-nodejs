const { default: mongoose } = require("mongoose")

const errorHandlerMiddleware = async (err, req, res, next) => {
	const error = {
		code: 500,
		message: err.message,
	}
	if (err instanceof mongoose.Error.ValidationError) {
		// console.log(err.message)
		error.code = 400
	}
	res.status(error.code).json({
		msg: error.message,
	})
}
module.exports = { errorHandlerMiddleware }
