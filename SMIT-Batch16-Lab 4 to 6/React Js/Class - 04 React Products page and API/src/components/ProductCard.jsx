import { Link } from "react-router-dom"

export const ProductCard = ({ product }) => {
  return (
    <Link to={`products/${product.id}`} className="border">
        <img src={product.image} alt={product.title} width="20px"/>
        <h1>{product.title}</h1>
        <p>${product.price}</p>
    </Link>
  )
}
