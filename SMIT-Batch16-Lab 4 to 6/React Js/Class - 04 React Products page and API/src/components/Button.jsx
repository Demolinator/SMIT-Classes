import { Link } from "react-router-dom"

const Button = () => {
  return (
    <Link to="/about" className='bg-black text-sm text-gray-100 px-4 py-1 rounded-full'>
      About
    </Link>
  )
}

export default Button
