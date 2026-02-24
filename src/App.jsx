import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CategoryProducts from "./pages/CategoryProducts";

function App() {

  return (

    <Routes>

      {/* Home Page */}
      <Route path="/" element={<HomePage />} />

      {/* Category Page */}
      <Route
        path="/category/:categoryName"
        element={<CategoryProducts />}
      />

    </Routes>

  );

}

export default App;