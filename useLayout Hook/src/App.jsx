import { useEffect } from 'react'
import './App.css'
import { useLayoutEffect } from 'react';

function App() {
  useEffect(()=>{
    console.log("Message from useEffect");
    
  },[])
  useLayoutEffect(()=>{
    console.log("Message from useLayoutEffect");  
  },[])
  return (
    <>
    <h2>Hello</h2>
    {Array(4000).fill("").map((item,index)=>(<li key={index}>
      {Math.pow(Math.random(),10)}
    </li>))}
    </>
  )
}

export default App
