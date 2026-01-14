// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import './App.css'
import Home from './pages/Home'
import { ProductDetails } from './pages/ProductDetails'


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
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
