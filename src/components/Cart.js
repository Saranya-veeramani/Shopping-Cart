import React, { useState, useEffect } from "react";
import CartItem from "./CartItem.js";
import CartForm from "./CartForm.js";
import './Cart.css'

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  
 
  const handleAddItem = (name, price, quantity) => {
    const newItem = { name, price, quantity };
    setCartItems([...cartItems, newItem]);
  };

    const handleRemoveItem = (index) => {
    const newItems = [...cartItems];
    newItems.splice(index, 1);
    setCartItems(newItems);
  };

  // function to update item quantity in the cart
  const handleUpdateQuantity = (index, newQuantity) => {
    const newItems = [...cartItems];
    newItems[index].quantity = newQuantity;
    setCartItems(newItems);
  };

  // calculate the total price of the cart
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <div className="cart-list">
        {cartItems.map((item, index) => (
          <CartItem
            key={index}
            index={index}
            item={item}
            handleRemoveItem={handleRemoveItem}
            handleUpdateQuantity={handleUpdateQuantity}
          />
        ))}
      </div>
      <div className="cart-total">
        <p>Total: ${totalPrice.toFixed(2)}</p>
      </div>
      <CartForm handleAddItem={handleAddItem} />
    </div>
  );
}

export default Cart;

