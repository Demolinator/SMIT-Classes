import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './components/Child'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")
  console.log("Parent rerendered...")

  return (
    <>
        <input type="text" onChange={(e) => setName(e.target.value)}/>

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <Child name={name}/>
    </>
  )
}

export default App
