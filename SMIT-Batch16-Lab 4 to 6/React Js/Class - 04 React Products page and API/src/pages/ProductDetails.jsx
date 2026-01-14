import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";


export const ProductDetails = () => {
    let [products, setProducts] = useState({});
    let { id } = useParams();
    // console.log(useParams())


    const fetchProduct = async () => {
    try{
      const response = await fetch(`https://fakestoreapi.com/products/${id}`)
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
    fetchProduct()
  }, [id])

  return (
    <>
    <h1 className="bg-gray-400 w-fit px-2 py-0.5 rounded-4xl text-gray-50">{products.category}</h1>
    <img src={products.image} alt={products.title} />
    <h1>{products.title}</h1>
    <p>{products.description}</p>
    <p>${products.price}</p>
  </>
  )
}
