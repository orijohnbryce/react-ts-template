import { createContext, useState } from "react";
import ProductsPage from "./components/productsPage/ProductsPage";
import { sendOrder } from "./client/orderApi";

export const AppContext = createContext<any>(null)

function App() {

    
    
    return (
        <>
            <h1> Hello My Store</h1>
         
            <ProductsPage/>
        </>        
    );
}

export default App;
