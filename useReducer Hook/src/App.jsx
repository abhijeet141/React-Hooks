import './App.css'
import {useReducer } from 'react'
function App() {
  const initialState = {count: 0}
  const reducer = (state, action) =>{
    switch(action.type){
      case 'Increase':{
        return {
          count: state.count + 1
        }
      }
      case 'Decrease':{
        return {
          count: state.count - 1
        }
      }
      case 'Input':{
        return {
          count: action.payload
        }
      }
      default:{
        return {
          state
        }
      }
    }

  }
  const [state, dispatch] =  useReducer(reducer, initialState)

  return (
    <>
    <h1>{state.count}</h1>
    <button onClick={()=>{dispatch({type: 'Increase'})}}>Increase</button>
    <button onClick={()=>{dispatch({type: 'Decrease'})}}>Decrease</button>
    <input type= "number" 
    value={state.count}
    onChange={(e)=>dispatch({type:'Input',payload: Number(e.target.value)})}/>
    </>
  )
}

export default App
