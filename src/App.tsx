import { useEffect } from "react";
import Products from "./components/Products";
import { fetchProducts } from "./client/products-client";
import { useDispatch } from "react-redux";
import { setProd } from "./redux/slices/productsSlice";

function App() {

    const dispatch = useDispatch()

    console.log("App rendered!");
    
    // fetch products from server, and add them to store        
    useEffect(() => {
        fetchProducts().then((products) => {                        
            dispatch(setProd(products))
        })
     }, [])

  return (
      <div>
      <h1> Redux + Redux Toolkit Example </h1>
          <Products />          
    </div>
  );
}

export default App;
