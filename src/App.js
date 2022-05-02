import logo from './logo.svg';
import './App.css';

import DaisyNavBar from './components/DaisyNavBar';


import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  
  return (
    <div className="App">
      <DaisyNavBar/>
      <ItemListContainer></ItemListContainer>
      {/*<h1 className="text-3xl font-bold">Servicio de Barista.</h1>
    
      <Saludo name='nacho' edad='5' funcionalidad={myFuncion}/>
      
      

      <Card>
        <Saludo name='dai' edad='44'/>
      </Card>

      <ItemListContainer GreetingSaludo='ItemListContainer' /> */}
      <ItemDetailContainer></ItemDetailContainer>
      
      
      
  </div>
  );
}

export default App;
