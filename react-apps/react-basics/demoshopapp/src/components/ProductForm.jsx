import './ProductForm.css';
import { useState } from 'react';

function ProductForm(props) {
  const [newtitle, setTitle] = useState('');
  const [newdate, setDate] = useState('');

  function titleChangeHandler(event) {
    setTitle(event.target.value);
  }

  function dateChangeHandler(event) {
    setDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const productData = {
      title: newtitle,
      date: newdate
    };

    // console.log(productData); // for now, just log the new product
    props.onSaveProduct();
    setTitle(''); // reset inputs correctly
    setDate('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-product-title'>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={newtitle}
          onChange={titleChangeHandler}
        />
      </div>

      <div className='new-product-date'>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          min='2023-01-01'
          max='2023-12-12'
          value={newdate}
          onChange={dateChangeHandler}
        />
      </div>

      <div className='new-product-button'>
        <button type='submit'>Add Product</button>
      </div>
    </form>
  );
}

export default ProductForm;
