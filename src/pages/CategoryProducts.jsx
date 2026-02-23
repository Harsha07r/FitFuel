import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function CategoryProducts() {

  const { categoryName } = useParams();

  const filteredProducts = products.filter(
    product => product.category === categoryName
  );

  return (

    <div className="min-h-screen bg-[#0F172A] p-8">

      {/* Title */}
      <h1 className="text-3xl font-bold text-white mb-8 flex justify-center items-center">
        {categoryName}
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </div>

  );
}

export default CategoryProducts;