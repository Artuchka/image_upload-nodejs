const express = require("express")
require("express-async-errors")
const cors = require("cors")

const { connectDB } = require("./database/connect")
const { errorHandlerMiddleware } = require("./middleware/error-handler")
const { notFoundMiddleware } = require("./middleware/notFound")
const { productRouter } = require("./router/productRouter")
const { uploadsRouter } = require("./router/uploadRouter")
require("dotenv").config()
const app = express()
const fileUpload = require("express-fileupload")

const port = process.env.PORT || 3000
app.use(cors())
app.use(express.static("./public"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(fileUpload())

app.get("/", (req, res) => {
	res.send("starter page")
})

app.use("/api/v1/products", productRouter)
app.use("/api/v1/products/uploads", uploadsRouter)

app.use(errorHandlerMiddleware)
app.use(notFoundMiddleware)

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI)
		console.log("connected")
		app.listen(port, () => {
			console.log(`listening on port = ${port}`)
		})
	} catch (error) {
		console.log(error)
	}
}

start()
