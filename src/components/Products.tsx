import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import AddProduct from "./AddProduct";

const Products = () => {
  console.log("Products rendered!");
  const products = useSelector(
    (state: RootState) => state.productsSlice.products
  );

  return (
    <div>
      <AddProduct />
      <div>
        products:
        <br />
        {products.map((p) => {
          return (
            <p key={p.id}>              
              {p.id}- {p.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
