import { memo } from "react"

const Child = ({ click }) => {
    console.log("Child rerendered...")
  return (
    <button onClick={() => click()}>
      Hello
    </button>
  )
}

export default memo(Child)