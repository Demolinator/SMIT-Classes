export default function Home(props) {
    const { posts } = props;
    console.log(posts)

    if (!posts) {
        return <div>Loading...</div>
    }

    const postsList = posts.map(post => {
        return (<li key={post.id}>
            {post.title}
        </li>)
    })

    return (
        <>
            <h2>Posts Page</h2>
            <ul>{postsList}</ul>
        </>
    );
}

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return (
        {
            props: {
                posts: data
            }
        }
    )
}