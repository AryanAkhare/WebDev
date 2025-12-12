import React from 'react'

const Spinner = () => {
  return (
      <div className="w-full flex justify-center py-8">
      <p className="text-[rgb(15,23,42)] font-bold text-xl tracking-wide animate-pulse">
        Loading...
      </p>
    </div>
  )
}

export default Spinner