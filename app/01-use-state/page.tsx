'use client'
import { useState } from "react";

export default function LocalState() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1 className="text-5xl">useEffect()</h1>
      <p>Count: {count}</p>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </div>
  )
}