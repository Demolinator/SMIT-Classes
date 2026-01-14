import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import { ProductCard } from "../components/ProductCard";

const Home = () => {
  let [products, setProducts] = useState([]); 

  const fetchProducts = async () => {
    try{
      const response = await fetch("https://fakestoreapi.com/products")
      if (!response.ok) {
        console.log("Failed to fetch products.");
      }
      const data = await response.json();
      setProducts(data)
    } catch (err) {
      console.log(err)
    }
  }
  
  useEffect(() => {
    fetchProducts()
  }, [])


  return (
    <>
      <Hero />
      <div>
        {products.map((product) => 
          <ProductCard key={product.id} product={product} />
          // <h1>{product.title}</h1>
        )}
      </div>
      <Footer />
    </>
  )
}

export default Home
