import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Navbar from "../components/Navbar";

function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const phoneNumber = "919493221473";

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) return;

    const itemLines = cartItems
      .map(
        (item, i) =>
          `${i + 1}. ${item.name} (${item.brand}) — Qty: ${item.quantity}`
      )
      .join("\n");

    const message =
      `Hello FitFuel! 👋 I'd like to place an order:\n\n` +
      itemLines +
      `\n\nTotal items: ${totalItems}` +
      `\n\nPlease confirm availability and share the total price. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(url, "_blank");
    clearCart();
  };

  // ── Empty State ────────────────────────────────────────────────────────────
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#0F172A] text-white flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center gap-6 px-4">
          <span className="text-8xl">🛒</span>
          <h2 className="text-3xl font-bold text-white">Your cart is empty</h2>
          <p className="text-gray-400 text-center max-w-sm">
            Looks like you haven't added anything yet. Browse our categories and
            add products you love!
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition"
          >
            Continue Shopping →
          </button>
        </div>
      </div>
    );
  }

  // ── Cart with items ────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#0F172A] text-white flex flex-col">
      <Navbar />

      <div className="flex-1 px-4 md:px-10 py-8 max-w-7xl mx-auto w-full">

        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-2">Your Cart 🛒</h1>
        <p className="text-gray-400 mb-8">
          {totalItems} {totalItems === 1 ? "item" : "items"} ready to order
        </p>

        <div className="flex flex-col lg:flex-row gap-8">

          {/* ── Left: Item List ───────────────────────────────────────────── */}
          <div className="flex-1 flex flex-col gap-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#1E293B] rounded-2xl p-4 flex gap-4 items-center shadow-md"
              >
                {/* Product Image */}
                <div className="bg-[#0F172A] rounded-xl p-3 flex-shrink-0 w-24 h-24 flex items-center justify-center">
                  <img
                    src={item.img || item.image}
                    alt={item.name}
                    className="h-full object-contain"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white text-base leading-snug truncate">
                    {item.name}
                  </h3>
                  <span className="text-xs bg-blue-900 text-blue-400 px-2 py-0.5 rounded-md font-semibold inline-block mt-1">
                    {item.brand}
                  </span>

                  {/* Qty Controls + Remove */}
                  <div className="flex items-center gap-3 mt-3">
                    {/* Decrease */}
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-8 h-8 rounded-lg bg-[#0F172A] hover:bg-gray-700 text-white font-bold flex items-center justify-center transition"
                    >
                      −
                    </button>

                    <span className="text-white font-semibold w-6 text-center">
                      {item.quantity}
                    </span>

                    {/* Increase */}
                    <button
                      onClick={() => updateQuantity(item.id, +1)}
                      className="w-8 h-8 rounded-lg bg-[#0F172A] hover:bg-gray-700 text-white font-bold flex items-center justify-center transition"
                    >
                      +
                    </button>

                    {/* Remove */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-2 text-red-400 hover:text-red-300 text-sm font-medium transition"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Right: Order Summary ──────────────────────────────────────── */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-[#1E293B] rounded-2xl p-6 shadow-lg sticky top-6">

              <h2 className="text-xl font-bold mb-5 border-b border-gray-700 pb-4">
                Order Summary
              </h2>

              {/* Per-item lines */}
              <div className="flex flex-col gap-3 mb-5">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-start text-sm">
                    <span className="text-gray-300 leading-snug flex-1 mr-2">
                      {item.name}
                    </span>
                    <span className="text-white font-medium whitespace-nowrap">
                      × {item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="flex justify-between items-center border-t border-gray-700 pt-4 mb-6">
                <span className="text-gray-400 font-medium">Total Items</span>
                <span className="text-white text-lg font-bold">{totalItems}</span>
              </div>

              {/* WhatsApp CTA */}
              <button
                onClick={handlePlaceOrder}
                className="w-full bg-green-500 hover:bg-green-600 active:scale-95 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-green-900/30"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Place Order via WhatsApp
              </button>

              <p className="text-gray-500 text-xs text-center mt-3">
                You'll be redirected to WhatsApp to confirm your order.
              </p>

              {/* Continue Shopping */}
              <button
                onClick={() => navigate("/")}
                className="w-full mt-3 border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 py-2.5 rounded-xl text-sm transition"
              >
                ← Continue Shopping
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CartPage;
