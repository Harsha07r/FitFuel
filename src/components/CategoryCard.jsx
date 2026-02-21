import React from 'react'

function CategoryCard({category}){
  return (
    <div className="bg-[#F8F9FB] rounded-2xl p-4 shadow-sm hover:shadow-lg transition duration-300">
       
       <div className="bg-white rounded-xl p-4">
         <img src={category.image} alt={category.name} className="w-full h-48 object-contain"/>
       </div>

       <div className="mt-4">
        <h2 className="text-lg font-semibold text-gray-900">{category.name}</h2>
        <p className="text-gray-500 text-sm mt-1 leading-relaxed">{category.description}</p>
       </div>
       
       <button className="mt-4 w-full border border-blue-600 text-blue-600 py-2 rounded-xl font-medium hover:bg-blue-600 hover:text-white transition flex items-center justify-center gap-2">
          View Products <span>→</span>
       </button>
    </div>
  )
}

export default CategoryCard
