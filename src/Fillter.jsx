import React, { useState } from "react";

const Fillter = () =>{
    const [fval, setfval] = useState(0);

    const inputevent =(e) =>{
       console.log(e.target.value);
       setfval(e.target.value); 
    }
    return(
        
   
   <div className="price-field">
     <form>
       <div>
     <span>&#8377; 100</span>
       <input type="range"  min="100" max="50000"  id="lower"  onChange={inputevent}/>
     <span>&#8377; {fval}</span>
     </div>
     <button className="apply">Apply</button>
     </form>
   </div>
    )
    
}

export default Fillter;