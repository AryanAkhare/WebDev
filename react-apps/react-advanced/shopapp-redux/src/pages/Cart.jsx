import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { useState } from 'react';

// Cart page: list items and show summary panel
const Cart = () => {

  const cart = useSelector((state) => state.cart);
  const [totalAmount,setTotalAmount]=useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0)) // reduce to compute total
  },[cart])
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {
        cart.length > 0 ?
        (<>
          {/* Items list */}
          <div className="lg:col-span-2 space-y-4">
          {
            cart.map((item,index)=>{
              return (
                <CartItem key={item.id} item={item} itemIndex={index} />
              )
            })
          }
          </div>

          {/* Summary panel */}
          <aside className="bg-white border rounded-lg p-4 shadow-sm">
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Your Cart</h2>
              <p className="text-sm text-gray-500">Summary</p>
            </div>
            <div className="mb-4">
              <p className="text-sm">Total Items: <span className="font-medium">{cart.length}</span></p>
            </div>
            <div className="mb-4">
              <p className="text-lg font-bold">Total Amount: ${totalAmount.toFixed(2)}</p>
            </div>
            <button className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Check Out</button>
          </aside>
        </>)
          :
        (<div className="text-center col-span-3">
            <h1 className="text-2xl font-semibold mb-4">Cart Empty</h1>
            <Link to="/">
              <button className="px-4 py-2 bg-blue-600 text-white rounded">Shop Now</button>
            </Link>
        </div>)
      }
    </div>
  )
}

export default Cart