
// client component is used to use interactivity. ustState browsrapi such as the localstorage. by default every next.js component is a sever component
'use client'
import { useState } from "react";


function Counter() {
    const [counter, setCounter] = useState<number>(0)
  return (
      <section className="items-center">
          <p className=" text-3xl font-bold">
              {counter}
          </p>
          <button onClick={() => setCounter(counter + 1)} className="btn bg-blue-500 text-white">
              increment
          </button>
    </section>
  )
}

export default Counter;