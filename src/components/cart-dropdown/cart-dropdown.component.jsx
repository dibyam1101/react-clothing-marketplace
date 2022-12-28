import React, { useContext } from "react";
import "./cart-dropdown.styles.scss";
import Button from "./../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { CartContext } from "../../contexts/cart.context";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem cartItem={item}></CartItem>;
        })}
      </div>
      <Button> Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;