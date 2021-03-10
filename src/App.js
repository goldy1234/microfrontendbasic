
import './App.css';
import { useCallback, useEffect, useState } from "react";

function App() {
  
const [clickedCount,setClickedCount] = useState(0);
  useEffect(()=>{
  const customEvent = new CustomEvent("loaded",{detail:'filter2'});
  document.dispatchEvent(customEvent);
  const customClickEvent = new CustomEvent("clicked",{detail:0});
    document.dispatchEvent(customClickEvent);
  },[])

  const handleClick = useCallback(()=>{
    setClickedCount(clickedCount+1);
    const customClickEvent = new CustomEvent("clicked",{detail:clickedCount+1});
    document.dispatchEvent(customClickEvent);
  },[clickedCount])
 
  return (
    <div className="App">
        <p>
          Filter 2 component
        </p>
        <button onClick={handleClick}>click me </button>
    </div>
  );
}

export default App;
