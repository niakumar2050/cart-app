import React from "react";

const Sort = (props) =>{
    return(
        <div className="sort">
            <h5>Short by</h5>
    <span>{props.shortp}</span>
            <span>price-low hight</span>
            <span>Discount</span>
            
        </div>
    )
}

export default Sort;