import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
  const [name, setName] = useLocalStorage('username','');
  const [id, setId] = useLocalStorage('userId','')
  
  return (
    <>
    <input type="text"
    placeholder='Enter your name'
    value={name}
    onChange={(e)=> setName(e.target.value)} />
    <h2>Hello {name}</h2>
    <input type="text"
    placeholder='Enter your Id'
    value={id}
    onChange={(e)=>{
      setId(e.target.value)
    }} />
    <h2>Your Id: {id}</h2>
    </>
  )
}

export default App
