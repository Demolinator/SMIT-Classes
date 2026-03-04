import Head from "next/head";

export default function post({ post }) {
  return (
    <div>
      <Head>
        <title>Single Post Page</title>
        <meta name="description" content="This is a dummy post"/>
      </Head>
      <Head>
        <title>Single Post Page</title>
        <meta name="author" content="Talal Ahmed"/>
      </Head>
      <h1>
        Hello Page
      </h1>
      <ul>
          <li>
            {post.title} <br/>
            {post.body}
          </li>
      </ul>
    </div>
  );
}


export async function getServerSideProps(context) {
    const { params } = context;
    const { postId } = params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  const data = await response.json()
  return {
    props: {
      post: data
    }
  }
}