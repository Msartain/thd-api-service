import Inventory from './components/inventory/inventory'
import Car from './components/car/car';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>The Home Depot</h1>
        <h4>Software Engineer Assignment</h4>
      </div>
      <div className="layout">
        <Car />
        <Inventory />
      </div>
    </div>
  );
}

export default App;
