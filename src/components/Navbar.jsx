import React, { useContext, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const { cartItems } = useContext(CartContext)

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const isHomePage = location.pathname === '/'

  const handleNavClick = (id, path) => {
    setIsOpen(false)
    // If a direct route path is provided, navigate there
    if (path) { navigate(path); return }
    // Home — always go to /
    if (id === 'home') { navigate('/'); return }
    // On home page, smooth-scroll to section
    if (isHomePage) {
      const section = document.getElementById(id)
      if (section) section.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    const q = searchQuery.trim()
    if (!q) return
    setSearchOpen(false)
    setIsOpen(false)
    setSearchQuery('')
    navigate(`/catalog?q=${encodeURIComponent(q)}`)
  }

  const handleOrderNow = () => {
    const msg = encodeURIComponent("Hi FitFuel! 👋 I'd like to place an order. Please share the product catalog.")
    window.open(`https://wa.me/919493221473?text=${msg}`, '_blank')
  }

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Categories', id: 'categories' },
    { label: 'Catalog', id: 'catalog', path: '/catalog' },
    { label: 'How it Works', id: 'how-it-works' },
    { label: 'Testimonials', id: 'testimonials' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <div className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">

      <div className="flex justify-between items-center px-6 md:px-12 py-3.5">

        {/* Logo */}
        <div
          className="cursor-pointer flex-shrink-0 flex items-center"
          onClick={() => navigate('/')}
        >
          <img
            src="/images/fitfuel_logo.png"
            alt="FitFuel"
            className="h-10 w-auto object-contain rounded-lg"
          />
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-7 list-none">
          {navItems.map((item) => (
            <li
              key={item.label}
              className={`text-sm cursor-pointer font-medium transition-colors pb-0.5 ${(item.path && isActive(item.path)) || (item.id === 'home' && isActive('/'))
                ? 'text-blue-700 border-b-2 border-blue-700'
                : 'text-gray-500 hover:text-blue-700'
                }`}
              onClick={() => handleNavClick(item.id, item.path)}
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* Desktop Right: Search + Cart + Order */}
        <div className="hidden md:flex items-center gap-3">

          {/* Expandable Search */}
          <form onSubmit={handleSearch} className="flex items-center">
            {searchOpen && (
              <input
                autoFocus
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onBlur={() => { if (!searchQuery) setSearchOpen(false) }}
                placeholder="Search products..."
                className="w-48 border border-gray-300 rounded-l-full px-4 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            )}
            <button
              type={searchOpen ? 'submit' : 'button'}
              onClick={() => !searchOpen && setSearchOpen(true)}
              className={`flex items-center justify-center w-9 h-9 transition ${searchOpen
                ? 'bg-blue-600 text-white rounded-r-full hover:bg-blue-700'
                : 'text-gray-500 hover:text-blue-700 rounded-full hover:bg-blue-50'
                }`}
              aria-label="Search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
              </svg>
            </button>
          </form>

          {/* Cart Icon */}
          <button
            onClick={() => navigate('/cart')}
            className={`relative flex items-center justify-center w-10 h-10 rounded-full transition ${isActive('/cart') ? 'bg-blue-50' : 'hover:bg-blue-50'}`}
            aria-label="Go to cart"
          >
            <span className="text-xl">🛒</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount > 99 ? '99+' : cartCount}
              </span>
            )}
          </button>

          {/* Order Now → WhatsApp */}
          <button
            onClick={handleOrderNow}
            className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full transition font-semibold text-sm shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Order Now
          </button>

        </div>

        {/* Mobile: Cart + Hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => navigate('/cart')}
            className="relative flex items-center justify-center w-9 h-9 rounded-full hover:bg-blue-50 transition"
            aria-label="Go to cart"
          >
            <span className="text-lg">🛒</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {cartCount > 9 ? '9+' : cartCount}
              </span>
            )}
          </button>

          <button
            className="flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg hover:bg-gray-100 transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

      </div>

      {/* Mobile Dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="flex flex-col px-6 pb-4 gap-1 list-none border-t border-gray-100">

          {/* Mobile Search */}
          <li className="pt-3 pb-1">
            <form onSubmit={handleSearch} className="flex items-center gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="flex-1 border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-blue-700 transition"
              >
                Go
              </button>
            </form>
          </li>

          {navItems.map((item) => (
            <li
              key={item.label}
              className={`text-sm cursor-pointer font-medium py-3 px-3 rounded-lg transition-colors ${(item.path && isActive(item.path))
                ? 'text-blue-700 bg-blue-50 font-semibold'
                : 'text-gray-600 hover:text-blue-700 hover:bg-blue-50'
                }`}
              onClick={() => handleNavClick(item.id, item.path)}
            >
              {item.label}
            </li>
          ))}

          <li className="mt-3">
            <button
              onClick={handleOrderNow}
              className="w-full bg-green-500 text-white py-3 rounded-full hover:bg-green-600 transition font-semibold text-sm flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Order Now via WhatsApp
            </button>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar
