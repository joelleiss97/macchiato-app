import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import DaisyNavBar from './components/DaisyNavBar';
import Saludo from './components/Saludo';
import Card from './components/Card';
import ItemListContainer from './components/ItemListContainer';
function App() {

  const myFuncion =() =>{/*logica*/}
  return (
    <div className="App">
      <DaisyNavBar/>
      <h1 className="text-3xl font-bold">Servicio de Barista.</h1>
     
      <Saludo name='nacho' edad='5' funcionalidad={myFuncion}/>
      
      

      <Card>
        <Saludo name='dai' edad='44'/>
        <Saludo name='rabias' edad='5'/>
      </Card>

      <ItemListContainer/>

    </div>
  );
}

export default App;
