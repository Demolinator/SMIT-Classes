import { memo } from "react"

const Child = ({ name }) => {
    console.log("Child rerendered...")
  return (
    <div>
      Hello {name}
    </div>
  )
}

export default memo(Child)