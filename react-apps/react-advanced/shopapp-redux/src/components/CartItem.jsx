import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';
const CartItem = ({item,itemIndex}) => {
  const dispatch=useDispatch();
  const removeFromCart=()=>{
    dispatch(remove(item.id));
    toast.success("Item removed")
  }
  return (
    // Single cart item row
    <div className="bg-white rounded-lg border p-4 flex items-center gap-4">
      <img className="w-24 h-24 object-contain" src={item.image} alt={item.title} />

      <div className="flex-1">
        <h3 className="font-semibold text-sm line-clamp-2">{item.title}</h3>
        <p className="text-xs text-gray-500 line-clamp-2">{item.description}</p>
        <div className="mt-2 flex items-center justify-between">
          <div className="text-lg font-bold">${item.price}</div>
          <button onClick={removeFromCart} className="p-2 bg-red-500 text-white rounded hover:bg-red-600">
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem