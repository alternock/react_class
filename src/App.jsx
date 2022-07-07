import listaDeAlias from "./mocks/lista";
import Titulo from "./components/Titulo";


function holaMundo(){
  return "toc toc soy hola mundo";
}

function Mensaje(){
  return(
    <div>
      <h3>soy un mensaje</h3>
    </div>
  )
}

function App() {
  return (
    <div>
      <Titulo/>
      <p>{holaMundo()} desde react</p>
      <p>yo soy {listaDeAlias[0]} - {listaDeAlias[1].toUpperCase()}</p>
      <Mensaje/>
    </div>
  )
}

export default App;