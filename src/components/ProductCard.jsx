
function ProductCard({ product }) {

    const phoneNumber = "919493221473";

    const handleWhatsapp = () => {

        const message =
        `Hello FitFuel,I want to order:\n\n`+
        `Product: ${product.name}\n`+
        `Brand: ${product.brand}\n`+
        `Category: ${product.category}\n`+
        `Please share the availability and price.`;

        const encodedMessage = encodeURIComponent(message);

        const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(url,"_blank");
    }

  return (
    <div className="bg-[#1E293B] rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 gap-8">

      {/* Image Section */}
    
      {/* Content */}
      <div className="p-5">
             
               <div className="bg-[#0F172A] p-6 flex justify-center items-center mb-3 rounded-xl">
        <img
          src={product.image}
          alt={product.name}
          className="h-48 object-contain"
        />
      </div>

        {/* Brand + Rating */}
        <div className="flex justify-between items-center mb-2">

          <span className="text-xs bg-blue-900 text-blue-400 px-2 py-1 rounded-md font-semibold">
            {product.brand}
          </span>

          <span className="text-yellow-400 text-sm font-medium">
            ⭐ {product.rating}
          </span>

        </div>

        {/* Product Name */}
        <h2 className="text-white font-semibold text-lg mb-3">
          {product.name}
        </h2>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {product.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs border border-gray-600 text-gray-300 px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Info */}
        <p className="text-blue-400 text-sm mb-4">
          Campus Availability & Price on WhatsApp
        </p>

        {/* Button */}
      <button
  onClick={handleWhatsapp}
  className="w-full border border-gray-500 text-white py-2 rounded-lg hover:bg-white hover:text-black transition"
>
  Inquire Now →
</button>
      </div>

    </div>
  );
}

export default ProductCard;