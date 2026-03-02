export default function Home({ posts }) {
  const postsList = posts.map(post => {
    return (
      <li key={post.id}>
        {post.title} <br />
        {post.body}
      </li>
    )
  })
  return (
    <div>
      <h1>
        Hello Page
      </h1>
      <ul>
          {postsList}
      </ul>
    </div>
  );
}


export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await response.json()
  return {
    props: {
      posts: data
    }
  }
}