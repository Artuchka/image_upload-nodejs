import { useState } from "react"
import { ItemList } from "../components/ItemList"
import { UploadForm } from "../components/UploadForm"

const url = "http://localhost:5000/api/v1/products"

function App() {
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
	return (
		<div className="App">
			<UploadForm getItems={getItems} />
			<ItemList getItems={getItems} items={items} />
		</div>
	)
}

export default App
