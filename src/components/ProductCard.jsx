import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {

  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const phoneNumber = "919493221473";

  // ── Tags: works with array (local data) OR comma-separated string (GSheet) ──
  const tags = Array.isArray(product.tags)
    ? product.tags
    : typeof product.tags === "string" && product.tags.trim() !== ""
      ? product.tags.split(",").map((t) => t.trim())
      : [];

  const handleWhatsapp = () => {
    const message =
      `Hello FitFuel, I want to order:\n\n` +
      `Product: ${product.name}\n` +
      `Brand: ${product.brand}\n` +
      `Please share the availability and price.`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const inStock = parseInt(product.stock) > 0;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300">

      {/* Image */}
      <div className="bg-slate-50 p-6 flex justify-center items-center border-b border-gray-100 h-52">
        {(product.img || product.image) ? (
          <img
            src={product.img || product.image}
            alt={product.name}
            className="h-44 object-contain"
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
          />
        ) : null}
        <div
          className="flex-col items-center justify-center text-gray-300 gap-2"
          style={{ display: (product.img || product.image) ? 'none' : 'flex' }}
        >
          <span className="text-5xl">🏋️</span>
          <span className="text-xs text-gray-400">No image</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Brand + Rating */}
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-md font-semibold">
            {product.brand}
          </span>
          <span className="text-yellow-500 text-sm font-medium">
            ⭐ {product.rating}
          </span>
        </div>

        {/* Product Name */}
        <h2 className="text-gray-900 font-semibold text-base mb-2 leading-snug">
          {product.name}
        </h2>

        {/* ── Tags from GSheet ────────────────────────────────────────────── */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-green-50 border border-green-200 text-green-700 px-2 py-0.5 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Stock Status */}
        <p className={`text-sm font-medium mb-4 ${inStock ? "text-green-600" : "text-red-500"}`}>
          {inStock ? `✓ In Stock (${product.stock})` : "✗ Out of Stock"}
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-2">

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            disabled={!inStock}
            className={`w-full py-2.5 rounded-xl font-semibold transition-all duration-300 text-sm ${!inStock
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : added
                ? "bg-green-500 text-white scale-105 shadow-md"
                : "bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
              }`}
          >
            {added ? "Added! ✓" : "Add to Cart 🛒"}
          </button>

          {/* Inquire on WhatsApp */}
          <button
            onClick={handleWhatsapp}
            className="w-full border border-gray-300 text-gray-700 py-2.5 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition text-sm font-medium"
          >
            Inquire Now →
          </button>

        </div>
      </div>

    </div>
  );
}

export default ProductCard;
