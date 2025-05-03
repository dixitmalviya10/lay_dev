import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/home/Home";
import MainLayout from "./layout/MainLayout";
import Products from "./pages/products/Products";
import Sales from "./pages/sales/Sales";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="sales" element={<Sales />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
