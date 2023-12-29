import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter, setCounter] = useState(15)
  const addValue = () => {
    if(counter <= 20) {
    setCounter(counter+1)
    } else {
      setCounter(counter-1)
    }
  }

  const minusValue = () => {
    if(counter > 0 && counter <= 20) {
      setCounter(counter-1)
      }
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <button onClick={addValue}>Increase: {counter}</button>
      <button onClick={minusValue}>Decrease": {counter}</button>
    </>
  )
}

export default App
