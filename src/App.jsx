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
  )
}

export default App
