import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CategoryProducts from "./pages/CategoryProducts";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import CatalogPage from "./pages/CatalogPage";

function App() {

  return (

    <Routes>

      {/* Home Page */}
      <Route path="/" element={<HomePage />} />

      {/* Category Products Page */}
      <Route
        path="/category/:categoryName"
        element={<CategoryProducts />}
      />

      {/* Product Details Page */}
      <Route
        path="/product/:productId"
        element={<ProductDetails />}
      />

      {/* Cart Page */}
      <Route
        path="/cart"
        element={<CartPage />}
      />

      {/* Full Catalog Page */}
      <Route
        path="/catalog"
        element={<CatalogPage />}
      />

    </Routes>

  );

}

export default App;