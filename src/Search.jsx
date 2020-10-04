import React, { useState } from "react";

const Search = () =>{
    const [svalue, setsvalue] =useState();

    const stype = (e) =>{
     const sdata =   e.target.value;
        setsvalue(sdata);
        console.log(svalue)
    }
    return(
        <div className="search">
            <input type="seach" onChange={stype}/>
            <button className="search_icon"/>        
        </div>
    )
}
export default Search;