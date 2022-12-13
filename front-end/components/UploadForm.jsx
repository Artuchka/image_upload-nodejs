import React, { useRef } from "react"

const url = "http://localhost:5000/api/v1/products/uploads"

export const UploadForm = () => {
	const fileInpRef = useRef(null)
	const onSubmit = (e) => {
		e.preventDefault()
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
		<form className="form" onSubmit={onChange}>
			<h3>upload the product</h3>
			<div className="row">
				<label htmlFor="title">title</label>
				<input type="text" id="title" placeholder="enter title" />
			</div>
			<div className="row">
				<label htmlFor="company">company</label>
				<input type="text" id="company" placeholder="enter company" />
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
