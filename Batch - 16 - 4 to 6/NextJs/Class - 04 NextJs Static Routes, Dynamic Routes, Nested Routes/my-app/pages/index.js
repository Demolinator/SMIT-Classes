export default function Home(props) {
  const {greet, todos} = props;
  console.log(todos)
  if (!todos) {
    return <div>Loading...</div>
  }
  const todosList = todos.map(todo => {
    return (  <li key={todo.id}>
        {todo.title}
    </li> )
  })
  return (
    <>
      <h1>{greet}</h1>
      <h2>Home Page</h2>
      <ul>{ todosList }</ul>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  let data = await response.json()
  console.log(data);
  return (
    {
      props: {
        greet: "Hello",
        todos: data
      },
      revalidate: 10
    }
  )
}
