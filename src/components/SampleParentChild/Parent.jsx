import { useState } from "react"
import Child from "./Child"
import SecondChild from "./SecondChild";

const Parent = () => {

  const [num, setNum] = useState(0);

  return (
    <div className="border-2 p-4 w-96 m-auto">

      <h2 className="text-xl m-5">Parent</h2>

      <span>{num}</span>

      <div className="border p-5 w-60">
        <Child num={num} setNum={setNum} />
      </div>

      <div className="border p-5 w-60">
        <SecondChild num={num}  />
      </div>
    </div>
  )
}

export default Parent