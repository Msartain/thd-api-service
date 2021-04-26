import Inventory from './components/inventory/inventory'
import Car from './components/car/car';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>The Home Depot</h1>
      <h4>Software Engineer Assignment</h4>
      <Inventory />
      <Car />
    </div>
  );
}

export default App;
