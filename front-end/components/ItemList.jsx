import React, { useEffect, useState } from "react"
import { Item } from "./Item"

const url = "http://localhost:5000/api/v1/products"
export const ItemList = () => {
	const [items, setItems] = useState([])
	const getItems = async () => {
		const resp = await fetch(url, {
			method: "GET",
		})
		const data = await resp.json()
		console.log(data)
		const products = data.products
		setItems(products)
	}
	useEffect(() => {
		getItems()
	}, [])
	return (
		<div>
			{items.map((item) => {
				return <Item {...item} key={item["_id"]} />
			})}
		</div>
	)
}
