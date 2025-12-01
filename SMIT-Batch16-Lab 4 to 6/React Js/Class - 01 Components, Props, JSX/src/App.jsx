import './App.css'
import Greeting from './components/Greeting/Greeting'

function App() {
  return (
    <>
      <div className='text-red-500'>Hello World</div>
      <Greeting name="Talal" age={21}/>
    </>
  )
}

export default App
