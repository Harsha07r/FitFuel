import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../services/productsAPI";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

    <div className="min-h-screen bg-slate-100">

      <Navbar />

      {/* Category Header */}
      <div className="bg-gradient-to-r from-[#0F172A] to-[#1E3A5F] py-10 px-8 mb-8">
        <h1 className="text-3xl font-bold text-white text-center tracking-wide">
          {categoryName}
        </h1>
        <p className="text-slate-400 text-center mt-2 text-sm">Browse our {categoryName} collection</p>
      </div>

      <div className="px-8">

        {/* Skeleton Loader */}
        {loading && (
          <div className="px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm animate-pulse">
                <div className="bg-gray-200 h-52 w-full" />
                <div className="p-5 space-y-3">
                  <div className="h-3 bg-gray-200 rounded w-1/3" />
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                  <div className="h-3 bg-gray-200 rounded w-1/2" />
                  <div className="h-9 bg-gray-200 rounded-xl mt-4" />
                  <div className="h-9 bg-gray-200 rounded-xl" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 py-12">No products found in this category.</p>
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

      </div>{/* end px-8 */}
      <Footer />
    </div>

  );
}

export default CategoryProducts;