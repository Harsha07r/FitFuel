import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full bg-white border-b border-gray-200 shadow-sm">

      {/* Main bar */}
      <div className="flex justify-between items-center px-6 md:px-12 py-4">

        {/* Logo */}
        <h3 className="text-xl font-bold text-gray-900">FitFuel</h3>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-10 list-none">
          <li className="text-sm text-gray-500 hover:text-blue-700 cursor-pointer font-medium transition-colors">Home</li>
          <li className="text-sm text-gray-500 hover:text-blue-700 cursor-pointer font-medium transition-colors">Categories</li>
          <li className="text-sm text-gray-500 hover:text-blue-700 cursor-pointer font-medium transition-colors">How it Works</li>
          <li className="text-sm text-gray-500 hover:text-blue-700 cursor-pointer font-medium transition-colors">Testimonials</li>
        </ul>

        {/* Desktop CTA */}
        <button className="hidden md:flex items-center gap-2 bg-blue-700 text-white px-6 py-2.5 rounded-full hover:bg-blue-800 transition font-medium text-sm">
          Order Now
        </button>

        {/* Hamburger button (mobile only) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg hover:bg-gray-100 transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

      </div>

      {/* Mobile dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="flex flex-col px-6 pb-4 gap-1 list-none border-t border-gray-100">
          {['Home', 'Categories', 'How it Works', 'Testimonials'].map((item) => (
            <li
              key={item}
              className="text-sm text-gray-600 hover:text-blue-700 hover:bg-blue-50 cursor-pointer font-medium py-3 px-3 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </li>
          ))}
          <li className="mt-2">
            <button className="w-full bg-blue-700 text-white py-3 rounded-full hover:bg-blue-800 transition font-medium text-sm">
              Order Now
            </button>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar