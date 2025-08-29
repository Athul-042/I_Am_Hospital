import { useState } from "react";  
function App() {  
  const [count, setCount] = useState(0);  
  return (  
    <div>  
      <div>style={{ textAlign: "center",marginTop:"20px" }}</div >
      <h1>Hello from React Demo</h1>
      <p>count:{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>  
    </div>  
  );  
}

export default App;