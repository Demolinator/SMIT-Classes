import "./App.css";
import { Link } from "react-router-dom";
import Users from "./components/Users";

function App() {
  return (
    <>
      <div>Home Page</div>
      
      <Link to="/about" className="bg-black text-white px-4 py-1 rounded-full hover:bg-amber-500 transition-all duration-500">About</Link>

      <Users />
    </>
  );
}

export default App;
