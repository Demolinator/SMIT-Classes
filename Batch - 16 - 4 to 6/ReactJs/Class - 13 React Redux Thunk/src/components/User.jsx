import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/User/UserSlice";


// state: {
//     counter: { 
//        value: 0 // initial value
//     }
// }

export default function User () {
    const user = useSelector((state) => state.user.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{user}</h1>
            <button className="rounded-full px-5 bg-gray-200" onClick={() => dispatch(increment())}>+1</button>
            <button className="rounded-full px-5 bg-black text-white" onClick={() => dispatch(decrement())}>-1</button>
        </div>
    )
}

