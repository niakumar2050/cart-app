import React from "react";

const Shopping = (props) =>{
    return(
        
            <div className="product">
                <img src={props.imgs} alt="ecom items"/>
                <span className="p_name">{props.itemname}</span>
                <div className="row">
                <span className="price">{props.price}</span>
                <span className="r_price">{props.rprice}</span>
                <span className="discount">{props.discount}</span>
            </div>
            <button className="add_cart">{props.addcart}</button>
            </div>
        
    )
}

export default Shopping;