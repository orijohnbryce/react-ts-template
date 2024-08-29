import { createContext, useState } from "react";
import ProductsPagePaginated from "./components/productsPage/ProductsPagePaginated";

export const AppContext = createContext<any>(null);

function App() {
  return (
    <>
      <h1> Hello My Store</h1>
      <ProductsPagePaginated />
    </>
  );
}

export default App;
