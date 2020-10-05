import React from "react";
import Search from "./Search";

import {Link} from "react-router-dom";
const Header = props => {
    console.log(props);
    return (
        <>
            <header>
                <span className="star"></span>
                <div>
                    <Search searchData={props.searchData} />
                </div>
                <div className="icon-cart">
                    <div className="cart-line-1"></div>
                    <div className="cart-line-2"></div>
                    <div className="cart-line-3"></div>
                    <div className="cart-wheel"></div>
                    <Link to ="/Cart"> <span>{props.totalItem}</span> </Link>
                </div>
                <div></div>
            </header>
        </>
    );
};
export default Header;
