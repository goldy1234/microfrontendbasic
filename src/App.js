
import './App.css';
import React, {useEffect, useState} from 'react';

function App() {
  
  const [clickedCount,setClickedCount] = useState(0);
  useEffect(()=>{
    const customEvent = new CustomEvent("loaded",{detail:'filter'});
    document.addEventListener('loaded',(event)=>{
      console.log("loaded event has been dispatched",event.detail);
    })
    const customClickEvent = new CustomEvent("clicked",{detail:0});
    document.addEventListener('clicked',(event)=>{
      setClickedCount(event.detail);
    })
   // document.dispatchEvent(customEvent);
  },[])
  
  return (
    <div className="App">
        <p>
          filter component
        </p>
       <span>Clicked {clickedCount}  times</span>
    </div>
  );
}

export default App;
