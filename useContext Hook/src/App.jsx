import { useState } from 'react'
import { Profile } from './components/Profile'
import { Footer } from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Profile></Profile>
    <Footer></Footer>
    </>
  )
}

export default App
