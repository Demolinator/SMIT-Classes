import './App.css'
import { useState } from 'react';
import Greetings from './components/Greeting'

function App() {
  // let [count, setCount] = useState(0);
  let setState = useState(0);
  let count = setState[0];
  let setCount = setState[1];


  function increase () {
    setCount(count + 1)
  }
  function decrease () {
    setCount(count - 1)
  }
  function reset () {
    setCount(0)
  }

  return (
    <>
      <div>Hello World</div>
      <Greetings name="Anas"/>
      <p>you clicked: {count}</p>
      <button onClick={increase}>Increment!</button>
      <button onClick={decrease}>Decrement!</button>
      <button onClick={reset}>Reset!</button>
    </>
  )
}

export default App
