import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [operator, setOperator] = useState("")
  const [display, setDisplay] = useState("0")
  const [memory, setMemory] = useState("")

  const additionFunction = () => {
    let suma = parseFloat(memory) + parseFloat(display);
    suma = suma.toString();
    setMemory( suma );
    setDisplay("0");
  };
  const sustractionFunction = () => {
    let resta = parseFloat(memory) - parseFloat(display)
    resta = resta.toString()
    setMemory( resta );
    setDisplay("0");
  };
  const multiplicationFunction = () => {
    let multi = parseFloat(memory) * parseFloat(display)
    multi = multi.toString()
    setMemory( multi );
    setDisplay("0");
  }
  const divisionFunction = () => {
    let div = parseFloat(memory) / parseFloat(display)
    div = div.toString()
    setMemory( div );
    setDisplay("0");
  }

  const keyHandler = (e) => {
    const input = e.target.value;
    if(input === "+") { //Si precionas + $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

      if (memory === "") {
        setMemory(display);
        setDisplay("0");
      } else {
        if (operator === "-") { sustractionFunction()}
        else if (operator === "*") {multiplicationFunction()}
        else if (operator === "/") {divisionFunction()}
        else {additionFunction()}
      }
      setOperator("+")

    } else if(input === "-") { //Si precionas - $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

      if (memory === "") {
        setMemory(display);
        setDisplay("0");
      } else {
        if (operator == "+") {additionFunction()}
        else if (operator === "*") {multiplicationFunction()}
        else if (operator === "/") {divisionFunction()}
        else {sustractionFunction()}
      }
      setOperator("-")

    } else if(input === "*") { //Si precionas * $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

      if (memory === "") {
        setMemory(display);
        setDisplay("0");
      } else {
        if (operator == "+") {additionFunction()}
        else if (operator === "-") {sustractionFunction()}
        else if (operator === "/") {divisionFunction()}
        else {multiplicationFunction()}
      }
      setOperator("*")

    } else if(input === "/") { //Si precionas / $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

      if (memory === "") {
        setMemory(display);
        setDisplay("0");
      } else {
        if (operator == "+") {additionFunction()}
        else if (operator === "-") {sustractionFunction()}
        else if (operator === "*") {multiplicationFunction()}
        else {divisionFunction()}
      }
      setOperator("/")

    } else if(input === "=") { //Si precionas = $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

      if (memory !== "") {

        if (operator === "+") {
          const result = parseFloat(memory) + parseFloat(display)
          setDisplay(result.toString())
        } else if (operator === "-") {
          const result = parseFloat(memory) - parseFloat(display)
          setDisplay(result.toString())
        } else if (operator === "*") {
          const result = parseFloat(memory) * parseFloat(display)
          setDisplay(result.toString())
        } else if (operator === "/") {
          const result = parseFloat(memory) / parseFloat(display)
          setDisplay(result.toString())
        }

      }
      setMemory("")
      setOperator("")

    } else if(input === "C") { //Si precionas CLEAR $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

      setOperator("")
      setDisplay("0")
      setMemory("")

    } else if(input === "D") { //Si precionas DEL $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

      if (display.length === 1) {
        setDisplay("0");
      } else if(display !== "0") {
        setDisplay(display.slice(0, -1));
      }

    } else if(input === ".") { //Si precionas . $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

      if(!display.includes(".") && display.length < 13) setDisplay(display + ".");
      
    } else { //En caso de precionar un numero (se esta trabajando con tipo string) maximo de 13 digitos
      if(display === "0") {
        setDisplay(input)
      } else {
        if (display.length < 13) setDisplay(display + input);
      }
    };
  }

  useEffect(() => {
    console.log(memory)
  }, [memory])

  return (
    <div className="App__Main">
      <h1>Calculator</h1>
      <div className='Calc__box'>
        <div className='Calc__Header'>
          <h3 className='Calc__Name'>
            Frandel 
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-calculator" viewBox="0 0 16 16">
              <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
              <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z"/>
            </svg>
          </h3>
          {/* <h3 className='Calc__Name'>mem {memory} op {operator}</h3> */}
        </div>
        <div className='Calc__display'>
          {display}
        </div>
        <div className='Calc__Buttons-box'>
          <button onClick={keyHandler} value={"7"} className='Calc__Button'>7</button>
          <button onClick={keyHandler} value={"8"} className='Calc__Button'>8</button>
          <button onClick={keyHandler} value={"9"} className='Calc__Button'>9</button>
          <button onClick={keyHandler} value={"/"} className='Calc__Button color-black'>/</button>
          <button onClick={keyHandler} value={"4"} className='Calc__Button'>4</button>
          <button onClick={keyHandler} value={"5"} className='Calc__Button'>5</button>
          <button onClick={keyHandler} value={"6"} className='Calc__Button'>6</button>
          <button onClick={keyHandler} value={"*"} className='Calc__Button color-black'>*</button>
          <button onClick={keyHandler} value={"1"} className='Calc__Button'>1</button>
          <button onClick={keyHandler} value={"2"} className='Calc__Button'>2</button>
          <button onClick={keyHandler} value={"3"} className='Calc__Button'>3</button>
          <button onClick={keyHandler} value={"-"} className='Calc__Button color-black'>-</button>
          <button onClick={keyHandler} value={"D"} className='Calc__Button color-magenta'>DEL</button>
          <button onClick={keyHandler} value={"."} className='Calc__Button'>.</button>
          <button onClick={keyHandler} value={"0"} className='Calc__Button'>0</button>
          <button onClick={keyHandler} value={"+"} className='Calc__Button button-plus color-black'>+</button>
          <button onClick={keyHandler} value={"C"} className='Calc__Button color-magenta'>AC</button>
          <button onClick={keyHandler} value={"="} className='Calc__Button button-0'>=</button>
        </div>
      </div>
    </div>
  )
}

export default App