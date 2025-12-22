import { useContext } from "react";
import { UserContext } from "./context/Context";

function GrandChild() {
  let chocolate = useContext(UserContext);
  return <div>{chocolate}</div>;
}

export default GrandChild;
