import React from "react";

const Cart = () =>{
    return(
        <div className="cart">
            <div className="row">
                <div className="col8">
                    <div className="item_box">
                        <img src="https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90" alt="item"/>
                        <div className="item_pirce">
                            <span>item</span>
                            <span>319 <em>26% off</em></span>
                        </div>
                        <div className="add_box">
                            <button>-</button>
                            <input type="text"/>
                            <button>+</button>
                        </div>
                        <button className="remove">Remove</button>
                    </div>
                </div>
                <div className="col4">
                    <div className="price_details">
                        <div className="row">
                            <div>
                            <span>Price</span>
                            <span>990</span>
                            </div>
                            <div>
                            <span>Disconut</span>
                            <span>990</span>
                            </div>
                            <div>
                            <span>total Payable</span>
                            <span>990</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;