import Button from './Button'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='w-full border-b border-[#3B4953] text-[#EBF4DD] p-2 flex justify-between items-center bg-[#5A7863] '>
      <Link to="/">Back to Home</Link>
      <Button />
    </div>
  )
}

export default Navbar
