import { useState, useEffect } from "react";
import Button from "../UI/Button";

function LoginBadge({ message }) {
  let [showBadge, setBadge] = useState(false);


  useEffect(() => {
    console.log("Effected...");
    if (showBadge) {
      let myTimeOut = setTimeout(() => {
      setBadge(false);
      console.log("loged")
    }, 5000);

    return () => clearTimeout(myTimeOut);
    }
    
  }, [showBadge]);

  return (
    <>
      <div>
       <Button setBadge={setBadge}/>

        {showBadge && (
          <div className="bg-green-300 absolute right-5 top-20 text-green-800 text-2xl p-5 rounded-2xl">
            {message}
          </div>
          )
        }
      </div>
    </>
  );
}

export default LoginBadge;
