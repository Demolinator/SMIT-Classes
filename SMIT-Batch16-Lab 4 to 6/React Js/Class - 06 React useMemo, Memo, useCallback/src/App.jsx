import { useCallback, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './components/Child'

function slowFunction (num) {
  console.log("this is from slow function")
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2
}

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")
  console.log("Parent rerendered...")
  
  let result = useMemo(() => {
    return slowFunction(count)
  }, [count])

  let handleClick = useCallback(() => {
    console.log("Clicked...")
  }, [])

  return (
    <>
        <input type="text" placeholder='Type Name' onChange={(e) => setName(e.target.value)}/>

        <button onClick={() => setCount((count) => count + 1)}>
          count is {result}
        </button>

        <Child click={handleClick}/>
    </>
  )
}

export default App
