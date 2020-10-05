import React, { useState } from "react";

const Fillter = (props) => {
    return (
        <div className="price-field">
            <form>
                <div>
                    <span>&#8377; 100</span>
                    <input
                        type="range"
                        min="100"
                        max="50000"
                        id="lower"
                        onChange={props.sortData}
                    />
                    <span>&#8377; {props.maxVal}</span>
                </div>
                <button className="apply">Apply</button>
            </form>
        </div>
    );
};

export default Fillter;
