import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../services/productsAPI";
import ProductCard from "../components/ProductCard";

function CategoryProducts() {

  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then(data => {
        setProducts(data);
      })
      .catch(err => {
        console.error("Failed to fetch products:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter(
    product => product.category === categoryName
  );

  return (

    <div className="min-h-screen bg-[#0F172A] p-8">

      {/* Title */}
      <h1 className="text-3xl font-bold text-white mb-8 flex justify-center items-center">
        {categoryName}
      </h1>

      {/* Loading state */}
      {loading && (
        <p className="text-center text-gray-400">Loading products...</p>
      )}

      {/* Empty state */}
      {!loading && filteredProducts.length === 0 && (
        <p className="text-center text-gray-400">No products found in this category.</p>
      )}

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