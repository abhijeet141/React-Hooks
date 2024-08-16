import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {
  const [value, setValue] = useState(0);
  const count = useRef(0);
  const inputElem = useRef();
  useEffect(()=>{
    count.current += 1;
  })

  return (
    <>
    <button onClick={()=>{
      setValue((value) => value - 1)
    }}>Decrement</button>
    <h1>{value}</h1>
    <button onClick={()=>{
      setValue((value) => value + 1)
    }}>Increment</button>
    <h1>Render Count: {count.current}</h1>
    <input type="text"
    ref = {inputElem} />
    <button onClick={()=>{
      console.log(inputElem.current);
      inputElem.current.style.backgroundColor = 'blue'
    }}>Click Here</button>
    </>
  )
}

export default App
