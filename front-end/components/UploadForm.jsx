import React, { useRef } from "react"

const url = "http://localhost:5000/api/v1/products/uploads"
const urlCreate = "http://localhost:5000/api/v1/products/"

export const UploadForm = ({ getItems }) => {
	const fileInpRef = useRef(null)
	const titleRef = useRef(null)
	const companyRef = useRef(null)

	const onSubmit = async (e) => {
		e.preventDefault()

		const imageName = fileInpRef.current?.files?.[0]?.name
		const title = titleRef.current.value
		const company = companyRef.current.value
		if (!imageName || !title || !company) {
			console.log("bad inputs")
			return
		}
		try {
			const bodyObj = {
				image: imageName,
				title,
				company,
			}
			console.log(bodyObj)
			const resp = await fetch(urlCreate, {
				method: "POST",
				body: JSON.stringify(bodyObj),
				headers: {
					"Content-Type": "application/json",
				},
			})
			console.log("resp is ", resp)
			getItems()
		} catch (error) {}
	}
	const onChange = async (e) => {
		e.preventDefault()
		const image = fileInpRef.current.files[0]
		const formData = new FormData()
		formData.append("image", image)
		try {
			const resp = await fetch(url, {
				method: "POST",
				body: formData,
			})
			console.log(resp)
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<form className="form" onSubmit={onSubmit}>
			<h3>upload the product</h3>
			<div className="row">
				<label htmlFor="title">title</label>
				<input
					type="text"
					id="title"
					ref={titleRef}
					placeholder="enter title"
				/>
			</div>
			<div className="row">
				<label htmlFor="company">company</label>
				<input
					type="text"
					id="company"
					ref={companyRef}
					placeholder="enter company"
				/>
			</div>
			<div className="row">
				<label htmlFor="image">image</label>
				<input
					type="file"
					id="image"
					accept="image/*"
					onChange={onChange}
					ref={fileInpRef}
				/>
			</div>
			<button type="submit">add new product</button>
		</form>
	)
}
