import { useSelector, useDispatch } from "react-redux";
import {  fetchPost } from "../features/posts/postSlice";


// state: {
//     counter: { 
//        value: 0 // initial value
//     }
// }

export default function Post () {
    const { posts, loading, error } = useSelector((state) => state.post);// it reads the states value
    const dispatch = useDispatch();

    return (
        <div>
            {/* <button className="rounded-full px-5 bg-gray-200" onClick={() => dispatch(clearUser())}>Clear Users</button> */}
            <button className="rounded-full px-5 bg-black text-white" onClick={() => dispatch(fetchPost())}>Load Post</button>
            <ul>
                {posts.map((post) => {
                    return <li key={post.id}>{post.title} - {post.body}</li>
                })}
            </ul>
        </div>
    )
}

