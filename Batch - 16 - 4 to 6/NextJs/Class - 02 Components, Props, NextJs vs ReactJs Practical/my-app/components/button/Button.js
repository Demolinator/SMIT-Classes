function Button ({ children, addHandler }) {
    return (
        <button onClick={addHandler}>{children}</button>
    )
}

export default Button;