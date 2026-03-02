export default function Home(props) {
    const { posts } = props;
    console.log(posts)


    return (
        <>
            <h2>Posts Page</h2>
            <ul>{posts.title}</ul>
        </>
    );
}

export async function getStaticProps({ params }) {
    const { postId } = params;
    console.log(params)
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const data = await response.json();
    return (
        {
            props: {
                posts: data
            }
        }
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    postId: '1',
                },
            }, 
        ],
        fallback: "blocking", // false or "blocking"
    }
}