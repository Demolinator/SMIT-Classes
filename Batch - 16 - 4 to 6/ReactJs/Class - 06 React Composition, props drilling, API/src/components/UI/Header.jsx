// import { useState } from "react"


function Header() {
    // let [login, setLogin] = useState("")


    return (
        <header>
            {/* <button onClick={() => {
                alert("login successful")
            }}>Login</button> */}
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Services</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header