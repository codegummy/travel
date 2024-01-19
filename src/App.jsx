
import { Cards } from "../components/Cards";
import { Main } from "../components/Main";
import { Navbar } from "../components/Navbar";
import data from "../components/data";

function App() {
	const cards = data.map(item => {
		return (<Cards key = {item.id} {...item}/>)
		

	})
	
	return (
	<>
	<Navbar/>
	{cards}

	</>
		
	);
}

export default App;
