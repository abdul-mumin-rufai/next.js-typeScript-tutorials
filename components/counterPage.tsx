'use client'
import { useState } from "react";


function CounterPage() {
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

export default CounterPage;