import React, { useState } from 'react';

function CartForm({ handleAddItem }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !price || !quantity) {
      return;
    }
    handleAddItem(name, parseFloat(price), parseInt(quantity));
    setName('');
    setPrice('');
    setQuantity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Item</h3>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <label>
        Price:
        <input type="number" value={price} step="0.01" min="0" onChange={(event) => setPrice(event.target.value)} />
      </label>
      
      <label>
        Quantity:
        <input type="number" value={quantity} min="1" onChange={(event) => setQuantity(event.target.value)} />
      </label>
      <button type="submit">Add to Cart</button>
    </form>
  );
}
export default CartForm;