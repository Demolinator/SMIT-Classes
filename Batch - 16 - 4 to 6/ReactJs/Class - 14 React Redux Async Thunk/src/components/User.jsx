import { useSelector, useDispatch } from "react-redux";
import { clearUser, fetchUser } from "../features/User/UserSlice";


// state: {
//     counter: { 
//        value: 0 // initial value
//     }
// }

export default function User () {
    const { user, loading, error } = useSelector((state) => state.user);// it reads the states value
    const dispatch = useDispatch();

    return (
        <div>
            <button className="rounded-full px-5 bg-gray-200" onClick={() => dispatch(clearUser())}>Clear Users</button>
            <button className="rounded-full px-5 bg-black text-white" onClick={() => dispatch(fetchUser())}>Load Users</button>
            <ul>
                {user.map((item) => {
                    return <li key={item.id}>{item.name} - {item.email}</li>
                })}
            </ul>
        </div>
    )
}

