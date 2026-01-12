import { Link } from "react-router-dom"

const Button = ({ path, message }) => {
  return (
    <Link to={path} className='bg-black text-sm text-gray-100 px-4 py-1 rounded-full'>
      {message}
    </Link>
  )
}

export default Button
