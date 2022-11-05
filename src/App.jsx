import './App.css';
import Navigation from '../components/Navigation';
import data from '../data';
import Card from '../components/Card';

function App() {
	const cards = data.map((item) => <Card key={item.id} data={item} />);

	return (
		<div className='app'>
			<Navigation />
			<div className='cards-container'>{cards}</div>
		</div>
	);
}

export default App;
