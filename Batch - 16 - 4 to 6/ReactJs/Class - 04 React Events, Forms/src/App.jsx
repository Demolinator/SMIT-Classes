import { useState } from 'react'
import './App.css'

function App() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [message, setMessage] = useState("");

  function handleSubmit (e) {
    e.preventDefault();
    if (password.length > 6) {
      setMessage("Sign Up Successful! " + email + password)
    } 
    else {
      setMessage("Password to short please input at least 7");
    }
    // console.log("clicked!", email, password)
  }

  return (
    <>
      <div>React Sign Up Form</div>

      <form onSubmit={handleSubmit}>
        <input className='border' type="email" onChange={(e) => setEmail(e.target.value)}/>
        <input className='border' type="password" onChange={(e) => setPassword(e.target.value)}/>
        <input type="submit" />
      </form>

      <p>{message}</p>
    </>
  )
}

export default App
