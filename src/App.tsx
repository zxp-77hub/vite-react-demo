import { useState } from 'react'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)
  function handleClick():void {
    setCount(count+1)
  }
  return (
    <>
      <h1 onClick={handleClick}>Todo list{count}</h1>
    </>
  )
}

export default App
