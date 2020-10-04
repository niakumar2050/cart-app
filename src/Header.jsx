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
                <div className="icon-cart">
                    <div className="cart-line-1"></div>
                    <div className="cart-line-2"></div>
                    <div className="cart-line-3"></div>
                    <div className="cart-wheel"></div>
                    <span>6</span>
                </div>
                <div>
                

  
                </div>
                              
            </header>
        </>
    )
}
export default Header;