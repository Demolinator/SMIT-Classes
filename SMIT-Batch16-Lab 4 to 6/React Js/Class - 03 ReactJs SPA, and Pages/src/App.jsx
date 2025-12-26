// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Home from './pages/Home'


function App() {
  // let [page, setPage] = useState("")


  return (
    // <>
    //   <button onClick={() => setPage("home")}>Home</button>
    //   <button onClick={() => setPage("about")}>About</button>
    //   {page === "home" && <Home />}
    //   {page === "about" && <About />}
    // </>

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
