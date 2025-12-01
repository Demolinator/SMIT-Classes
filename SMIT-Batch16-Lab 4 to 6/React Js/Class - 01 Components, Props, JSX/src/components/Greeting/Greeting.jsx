function Greeting(props) {
    console.log(props.age);
    return (
        <>
            <div>
                Hello {props.name}
            </div>
            <div>
                age {props.age}
            </div>
        </>
    )

}

export default Greeting;