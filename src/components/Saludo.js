//const Saludo = (props) =>{
const Saludo = ({name, edad, funcionalidad}) =>{
    return(
        //<h1 className="text-8xl font-bold">
        //    hola nacho{props.name}!
        //</h1>
        <h1 className="text-4xl font-bold">
            hola {name}!
            tienes {edad} años
        </h1>
    )
}

export default Saludo



