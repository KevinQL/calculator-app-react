import './App.css';
import logoImg from './img/calculator.png';
import Boton from "./components/Boton";
import Pantalla from "./components/Pantalla";
import BotonClear from "./components/BotonClear";
import Logo from "./components/Logo";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {

  const [input, setInput] = useState('');

  function isLastOperator(val){
    let operator = ['+','-','*','/','.','=']
    
    /**
     * Evalua si existe operador al final de la cadena
     */
    let isOp = false;
    for (const op of operator) {
      if(input.endsWith(op)){
        isOp = true;
        break;
      }
    }

    /**
     * Ecalua si la entrada actual es un operador
     */
    console.log(isOp);
    let valIsOp = false;
    for (const op of operator) {
      if(val === op){
        valIsOp = true;
        break;
      }
    }

    console.log(valIsOp);
    console.log({isOp, valIsOp});

    return isOp && valIsOp;

  }


  /**
   * It takes a value, adds it to the current input, and then sets the input to the new value
   */
  const agregarInput = val => {

    if(isLastOperator(val)){
      alert('operacion invalida!')
      setInput(input);
    }else{
      setInput(input + val);
    }

  }


  /**
   * It takes the input, evaluates it, and then sets the input to the result of the evaluation
   */
  const calcularResultado = (val) => {

    /**
     * values truthy or falsy (is input) : valores que por si solos son verdaderos o falsos
     */
    if(input && !isLastOperator(val)){
      setInput( String( evaluate(input) ) )
    }else{
      alert("Ingresar valores para realizar el cálculo!!");
    }

  }


  /* Returning the JSX code that will be rendered in the browser. */
  return (
    <div className='App'>

      <Logo 
        logoImg = {logoImg}
        alt = 'logo calculator is ready'
      />

      <div className='contenedor-calculadora' >
        <Pantalla 
          input={input} />

        <div className='fila'>
          <Boton manejarClick = {agregarInput} >1</Boton>
          <Boton manejarClick = {agregarInput} >2</Boton>
          <Boton manejarClick = {agregarInput} >3</Boton>
          <Boton manejarClick = {agregarInput} >+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick = {agregarInput} >4</Boton>
          <Boton manejarClick = {agregarInput} >5</Boton>
          <Boton manejarClick = {agregarInput} >6</Boton>
          <Boton manejarClick = {agregarInput} >-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick = {agregarInput} >7</Boton>
          <Boton manejarClick = {agregarInput} >8</Boton>
          <Boton manejarClick = {agregarInput} >9</Boton>
          <Boton manejarClick = {agregarInput} >*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick = {calcularResultado} >=</Boton>
          <Boton manejarClick = {agregarInput} >0</Boton>
          <Boton manejarClick = {agregarInput} >.</Boton>
          <Boton manejarClick = {agregarInput} >/</Boton>
        </div>
        <div className='fila'>
          <BotonClear 
            manejarClear={ ()=>setInput('') } >
              Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
