import React, { useState } from "react";

const Search = (props) =>{
    return(
        <div className="search">
            <input type="seach" onChange={props.searchData}/>
            <button className="search_icon"/>        
        </div>
    )
}
export default Search;