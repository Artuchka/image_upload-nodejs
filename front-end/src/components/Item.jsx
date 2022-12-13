import React from "react"

export const Item = ({ company, title, image }) => {
	return (
		<div className="card">
			<img src={image} alt="product" />
			<h3 className="title">{title}</h3>
			<h3 className="company">{company}</h3>
		</div>
	)
}
