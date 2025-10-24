import './Item.css';
import React, { useState } from 'react';

function Item(props) {
  const [name, setName] = useState(props.name);

  const clickHandler = () => {
    // Example: change the name to show it's added to cart
    setName(name + " (Added to Cart)");
  };

  return (
    <div>
      <p className="name">{name}</p>
      <button onClick={clickHandler}>Add to Cart</button>
    </div>
  );
}

export default Item;
