import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import { useCallback } from 'react';
function App() {
  const [count, setCount] = useState(0);
  const newFn = useCallback(()=>{

  },[])
  return (
    <>
    <Header newFn={newFn}></Header>
    <h1>{count}</h1>
    <button onClick={()=>{setCount(count=>count + 1)}}>Click Here</button>
    </>
  )
}

export default App
