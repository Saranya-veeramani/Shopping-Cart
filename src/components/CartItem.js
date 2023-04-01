import React from 'react';

function CartItem({ index, item, handleRemoveItem, handleUpdateQuantity }) {
  const handleQuantityChange = (event) => {
    handleUpdateQuantity(index, parseInt(event.target.value));
  };

  return (
    <div className="cart-item">
      <p>{item.name}</p>
      <p>${item.price.toFixed(2)}</p>
      <input type="number" value={item.quantity} min="1" onChange={handleQuantityChange} />
      <button onClick={() => handleRemoveItem(index)}>Remove</button>
    </div>
  );
}

export default CartItem;
