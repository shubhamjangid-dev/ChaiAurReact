import { useState } from 'react'
import './App.css'


function App() {
  const AddValue = () => {
    // counter = counter + 1;
    // console.log('AddValue', counter);
    if(counter<20)
    setCounter(counter+1);
  }
  const MinusValue = () => {
    // counter = counter - 1;
    // console.log('MinusValue', counter);
    if(counter>0)
    setCounter(counter-1);
  }
  
  // let counter = 0;

  // hooks 
  let [counter, setCounter] = useState(0); // useState(<default value >)

  // setCounter function h jo counter ko update krta h ui me 
  // kya update krni h ui me vo parameters me pass kr denge

  return (
    <>
      <h1>Chai Aur React {counter}</h1>
      <h2>Count = {counter}</h2>
      <button onClick={AddValue}>Add One {counter}</button>
      <br/>
      <button onClick={MinusValue}>Minus One {counter} </button>
    </>
  )
}

export default App
// ASSIGNMENT
// 0 <= counter <= 20