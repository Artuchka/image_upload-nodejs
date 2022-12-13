import { useState } from "react"
import { ItemList } from "../components/ItemList"
import { UploadForm } from "../components/UploadForm"

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className="App">
			<UploadForm />
			<ItemList />
		</div>
	)
}

export default App
