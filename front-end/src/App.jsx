import { useState } from "react"
import { UploadForm } from "../components/UploadForm"

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className="App">
			<UploadForm />
		</div>
	)
}

export default App
