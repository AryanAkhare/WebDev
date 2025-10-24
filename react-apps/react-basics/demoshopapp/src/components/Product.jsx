import React from 'react';
import './Product.css';
import Item from './Item';
import ItemDate from './ItemDate';

function Product({ products }) {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div className="product-card" key={index}>
          <Item name={product.itemName} />
          <ItemDate day={product.day} month={product.month} year={product.year} />
        </div>
      ))}
    </div>
  );
}

export default Product;
