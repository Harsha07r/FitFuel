<<<<<<< HEAD
import categories from "./data/categories"
import CategoryCard from "./components/CategoryCard"
function App() {
  return (
    <div className="min-h-screen bg-[#F1F5F9]">
        <h1 className="text-3xl font-bold text-center py-8 text-gray-900">
        Fuel Your Ambition
      </h1>

    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
     {categories.map((category)=>(
   <CategoryCard
   key={category.id}
   category={category}
   />
    ))}

    </div>

    </div>
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
>>>>>>> 6298672dea604d7b7939b1edbd26fb768c8918fe
  )
}

export default App
