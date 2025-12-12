import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import { add,remove } from '../redux/slices/CartSlice';

const Product = ({ post}) => {

  const cart = useSelector((state) => state.cart);
  const inCart = Array.isArray(cart) && cart.some((p) => p.id === post.id);


  const dispatch=useDispatch();

  const addToCart=()=>{
    dispatch(add(post));
    toast.success("Items added to Cart")
  }

  const removeFromCart=()=>{
    dispatch(remove(post.id));
    toast.success("Items Removed")
  }

  return (
    // Product card
    <div className="border bg-white rounded-lg shadow-sm p-4 flex flex-col">
      <div className="flex-1 flex flex-col">
        <h3 className="font-semibold text-sm mb-2 line-clamp-2">{post.title}</h3>
        <p className="text-xs text-gray-500 mb-3 line-clamp-3">{post.description}</p>
      </div>

      <div className="h-40 flex items-center justify-center mb-3">
        <img className="max-h-32 object-contain" src={post.image} alt={post.title} />
      </div>

      <div className="flex items-center justify-between">
        <div className="text-lg font-bold">${post.price}</div>
        {inCart ? (
          <button onClick={removeFromCart} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">Remove</button>
        ) : (
          <button onClick={addToCart} className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700">Add</button>
        )}
      </div>
    </div>
  )
}

export default Product
