import React from "react";
import Search from "./Search";

const Header = () =>{
    return(
        <>
            <header>
                <span className="star"></span> 
                <div>
                    <Search></Search>
                </div> 
                              
            </header>
        </>
    )
}
export default Header;