import React from "react";

const Shopping = (props) =>{
    return(
        
            <div className="product">
                <img src={props.imgs} alt="ecom items"/>
                <span className="p_name">{props.itemname}</span>
                <div className="row">
                <span className="price">&#8377;{props.price}</span>
                <span className="r_price">&#8377;{props.rprice}</span>
                <span className="discount">{props.discount}% off</span>
            </div>
            <button className="add_cart" onClick={props.addInCart}>{props.addcart}</button>
            </div>
        
    )
}

export default Shopping;