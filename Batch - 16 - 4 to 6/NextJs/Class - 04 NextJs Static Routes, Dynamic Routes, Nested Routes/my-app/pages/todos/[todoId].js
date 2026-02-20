export default function Home(props) {
  const {todo} = props;
  console.log(todo)
  // if (!todo) {
  //   return <div>Loading...</div>
  // }
  return (
    <>
      <h2>Todos Detail Page</h2>
      <ul>{ todo.title }</ul>
    </>
  );
}

export async function getStaticProps({ params }) {
  const { todoId } = params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
  let data = await response.json()
  console.log(data);
  return (
    {
      props: {
        todo: data
      },
      revalidate: 10
    }
  )
}

export async function getStaticPaths () {
  return {
  paths: [
      {
        params: {
          todoId: "1",
        },
      }, 
    ],
    fallback: "blocking", // false or "blocking"
  }
}
