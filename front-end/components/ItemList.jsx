import React, { useEffect, useState } from "react"
import { Item } from "./Item"

export const ItemList = ({ getItems, items }) => {
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
