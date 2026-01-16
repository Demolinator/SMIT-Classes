import { useSelector, useDispatch } from "react-redux";
import { increment,  decrement } from "./counterSlice" 

function counter () {
    const count = useSelector((state) => state.counter.value);
}

const dispatch = useDispatch();