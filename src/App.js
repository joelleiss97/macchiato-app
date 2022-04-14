import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import DaisyNavBar from './components/DaisyNavBar';
function App() {
  return (
    <div className="App">
      <DaisyNavBar/>
     
      <h3 className="text-4xl font-bold">Bienvenidos a Macchiato, Cafeteria de Especialidad</h3>
      <h2 className="text-3xl font-bold">Servicio de Barista.</h2>
      
    </div>
  );
}

export default App;
