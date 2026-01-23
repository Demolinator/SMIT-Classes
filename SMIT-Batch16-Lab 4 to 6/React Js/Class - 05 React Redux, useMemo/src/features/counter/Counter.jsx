import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./conterSlice";


export default function Counter () {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{count}</h1>
            <button className="rounded-full px-5 bg-gray-200" onClick={() => dispatch(increment())}>+1</button>
            <button className="rounded-full px-5 bg-black text-white" onClick={() => dispatch(decrement())}>-1</button>
        </div>
    )
}

