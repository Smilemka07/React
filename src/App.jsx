import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  const numbers = [1, 2, 3, 4, 5, 6, 7];
  const [items, setItems] = useState([]);
  const addItem = () => {
    setItems([...items, items.length + 1]);
  };

  // useEffect
  useEffect(() => {
    console.log("Runs Once!");
  }, []);
  // use effect runs after render, [] -> run only once (on mount)
  useEffect(() => {
    console.log("Runs every render");
  });
  // No dependency array → runs after every render
  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);
  // Effect runs only when count changes
  useEffect(() => {
  const timer = setTimeout(() => {
    console.log("Hello after 2s");
  }, 2000);

  return () => clearTimeout(timer);
}, []);
// Effects are for side effects
// Cleanup function prevents leaks
useEffect(() => {
  const timer = setTimeout(() => {
    setCount(prev => prev + 1);
  }, 1000);

  return () => clearTimeout(timer);
}, [count]);
// Effect can change state , State change → re-render → effect runs again → creates a loop (controlled)
useEffect(() => {
  console.log("Mounted");

  return () => {
    console.log("Unmounted");
  };
}, []);
// Cleanup runs when component is removed
  return (
    <div>
      <div className="Counter">
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
      <div className="toggle">
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show && <h1>Hey..</h1>}
      </div>
      <div className="map">
        {numbers.map((n) => (
          <div>{n}</div>
        ))}
      </div>
      <div>
        <button onClick={addItem}>Add</button>

        {items.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
      {/* useEffect */}
      <div>
        <h1>check console</h1>
      </div>
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Click</button>
      </div>
    </div>
  );
}

export default App;
