function Button({ setBadge }) {
    
  const HandleLogin = () => {
    setBadge(true);
  };

  return (
    <button
      className="bg-red-500 px-7 py-1.5 rounded-full"
      onClick={HandleLogin}
    >
      Login
    </button>
  );
}

export default Button;
