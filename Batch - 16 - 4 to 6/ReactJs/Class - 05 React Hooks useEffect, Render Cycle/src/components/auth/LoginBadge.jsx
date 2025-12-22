import { useState, useEffect } from "react";

function LoginBadge({ message }) {
  let [showBadge, setBadge] = useState(false);

  const HandleLogin = () => {
    setBadge(true);
  };

  useEffect(() => {
    console.log("Effected...");
    let myTimeOut = setTimeout(() => {
      setBadge(false);
    }, 5000);
  }, [showBadge]);

  return (
    <>
      <div>
        <button
          className="bg-red-500 px-7 py-1.5 rounded-full"
          onClick={HandleLogin}
        >
          Login
        </button>

        {showBadge && (
          <div className="bg-green-300 absolute right-5 top-20 text-green-800 text-2xl p-5 rounded-2xl">
            {message}
          </div>
        )}
      </div>
    </>
  );
}

export default LoginBadge;
