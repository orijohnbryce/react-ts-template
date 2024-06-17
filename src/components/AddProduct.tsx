import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProd } from "../redux/slices/productsSlice";

type Props = {};

const AddProduct = (props: Props) => {
  console.log("AddProduct rendered!");

  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number | undefined>(undefined);
  const [id, setId] = useState<string>("");

  const dispatch = useDispatch();

  const handleAdd = () => {
    // this "add" will not send the new product to server. only to redux store
    dispatch(addProd({ name, price, id }));
  };

  return (
    <div>
      AddProduct
      <br />
      <input
        placeholder="title"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <input
        placeholder="price"
        type="number"
        value={price ? price : ""}
        onChange={(e) => {
          setPrice(Number(e.target.value));
        }}
      />
      <br />
      <input
        placeholder="id"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <br />
      <button onClick={handleAdd}> ADD </button>
    </div>
  );
};

export default AddProduct;
