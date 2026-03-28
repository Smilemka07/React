import { useState } from 'react'
import './App.css'

function App() {
   const [count , setCount] = useState(0);
   const[show, setShow] = useState(true);
   const numbers = [1,2,3,4,5,6,7];
   const [items, setItems] = useState([]);
   const addItem = () => {
  setItems([...items, items.length + 1]);
};
  return (
    <div>
    <div className='Counter'>
   <h1>{count}</h1>
   <button onClick={() => setCount(count+1)} >Increase</button>
   </div>
   <div className='toggle' >
      <button onClick={()=> setShow(!show)}>Toggle</button>
       {show && <h1>Hey..</h1>}
   </div>
   <div className='map'>
      {numbers.map((n)=> (
        <div >{n}</div>
      ))}
   </div>
   <div>
      <button onClick={addItem}>Add</button>

    {items.map((item) => (
      <div key={item}>{item}</div>
    ))}
   </div>
   </div>
   
  );
}

export default App
