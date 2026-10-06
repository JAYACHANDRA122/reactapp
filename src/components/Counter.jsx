import { useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  const increase = () => setCount(prev => prev + 1);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increase}>Increase</button>
    </div>
  );
// 