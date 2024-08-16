import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor] = useState('Red');
  const [car, setCar] = useState({
      brand : 'Ferrari',
      model : 'Roma',
      year: '2023',
      color: 'red'
  });
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>
        <h1>My favorite color is {color}</h1>
      <button onClick={()=>{
              setColor("Blue")}}>Blue
      </button>
      </div>
      <div>
        <h1>My {car.brand}</h1>
        <h2>It is a {car.color} {car.model} from {car.year}</h2>
        <button onClick={()=>{
          setCar((prevValue)=>{
            return {...prevValue, color:'blue'}
          })
        }}>Blue</button>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={()=>{
          setCount((count) => count + 1)
          setCount((count) => count + 1)
          setCount((count) => count + 1)
          setCount((count) => count + 1)
        }}>Increment</button>
      </div>
    </div>
  </div>
  )
}

export default App
