import { useState } from "react";
import Header from "./components/UI/Header";
import Main from "./components/UI/Main";
import Footer from "./components/UI/Footer";
import "./App.css";
import LoginBadge from "./components/auth/LoginBadge";
import Parent from "./Parent";
import { UserContext } from "./context/Context";

function App() {
  // let counter = 0;
  // let count = () => {
  //   counter = counter + 1
  //   console.log(counter)
  // }

  // ------------------------------------------------

  // let [count, setCount] = useState(0);

  // return (
  //   <>
  //     <div>Talal's React Project</div>
  //     <p>counter: {count}</p>
  //     <button onClick={() => {
  //       setCount(count + 1)
  //     }}>click me</button>
  //   </>
  // )

  // ------------------------------------------------

  return (
    <>
      <Header />
      <Main />
      <Footer />
      <LoginBadge message="Login Successful" />

      <UserContext.Provider value="Eating Chocolate">
        <Parent />
      </UserContext.Provider>
    </>
  );
}

export default App;
