import React from "react";

const Cart = props => {
    console.log(props.cart);
    return (
        <>
        <h2>Cart Page</h2>
        <div className="cart">
            <div className="row">
                <div className="col8">
                    {!props.cart
                        ? null
                        : props.cart.map(cartData => {
                              return (
                                  <div className="item_box" key={cartData.id}>
                                      <img
                                          src="https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90"
                                          alt="item"
                                      />
                                      <div className="item_pirce">
                                          <span>{cartData.name}</span>
                                          <span>
                                              {cartData.price.actual} <em>{cartData.discount}% off</em>
                                          </span>
                                      </div>
                                      <div className="add_box">
                                          <button>-</button>
                                          <input type="text" />
                                          <button>+</button>
                                      </div>
                                      <button className="remove">Remove</button>
                                  </div>
                              );
                          })}
                </div>
                <div className="col4">
                    <div className="price_details">
                        <div className="row">
                            <div>
                                <span>Price</span>
                                <span>{props.cart.reduce((prevValue, currentValue) => prevValue + currentValue.price.actual, 0)}</span>
                            </div>
                            <div>
                                <span>Discount</span>
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
        </>
    );
};

export default Cart;
