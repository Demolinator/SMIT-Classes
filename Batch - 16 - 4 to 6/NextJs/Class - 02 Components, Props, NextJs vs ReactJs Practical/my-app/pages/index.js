import Button from "@/components/button/Button";
import List from "@/components/list/LIst";
import { useState } from "react";

export default function Home() {
  let [arr, setArr] = useState(["item no.1", "item no.2", "item no.3"])

  function addHandler () {
    setArr(item => [...item, "New Item"])
  }

  return (
    <>
      <div>Hello World</div>
      <List arr={arr}/>
      <Button addHandler={addHandler}>Add</Button>
    </>
  )
}
