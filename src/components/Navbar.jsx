import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full px-12 py-4 bg-white border-b border-gray-200 shadow-sm">
      
      <div className="flex items-center gap-3">
        <h3 className="text-xl font-bold text-gray-900">FitFuel</h3>
      </div>

      <ul className="flex items-center gap-10 list-none">
        <li className="text-sm text-gray-500 hover:text-blue-700 cursor-pointer font-medium">Home</li>
        <li className="text-sm text-gray-500 hover:text-blue-700 cursor-pointer font-medium">Categories</li>
        <li className="text-sm text-gray-500 hover:text-blue-700 cursor-pointer font-medium">How it Works</li>
        <li className="text-sm text-gray-500 hover:text-blue-700 cursor-pointer font-medium">Testimonials</li>
      </ul>

      <button className="flex items-center gap-2 bg-blue-700 text-white px-6 py-2.5 rounded-full hover:bg-blue-800 transition font-medium text-sm">
        Order Now
      </button>

    </div>
  )
}

export default Navbar