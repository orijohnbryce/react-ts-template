import React, { useContext, useEffect, useState } from "react";
import { getAllProducts, getPaginatedProducts } from "../../client/productApi";
import { AppContext } from "../../App";
import "./ProductsPage.css"
import InfiniteScroll from "react-infinite-scroller";
import AddImage from "../addImage/AddImage";
import ProductImages from "../productImages/ProductImages";

type Props = {};

const ProductsPage = () => {
    const [products, setProducts] = useState<any>([]);
    const [page, setPage] = useState<number>(0);
    const [hasMore, setHasMore] = useState<boolean>(true);    
    const [showModal, setShowModal] = useState(false);
    const [selectedPid, setSelectedPid] = useState<number | undefined>()

    const loadMoreProdcuts = async () => {
        const newProducts = await getPaginatedProducts(page);
        if (newProducts.length == 0) {
            setHasMore(false);
        } else {
            console.log(newProducts);

            setProducts([...products, ...newProducts])
            setPage((prev) => prev + 1);
        }
    }

    const handleAddImage = (pid: number)=> {
        setSelectedPid(pid);
        setShowModal(true);
    }


    return (
        <div>
            <h1> ProductsPage </h1>
            {showModal && <AddImage pid={selectedPid as number} showModal={showModal} setShowModal={setShowModal}/>}

            <InfiniteScroll
                pageStart={0}
                loadMore={loadMoreProdcuts}                
                hasMore={hasMore}
                loader={<p key={0}> Loading .... </p>}
            >

                {products.map((p: any) => {
                    return (
                        <div key={p.id} className="prd-container">
                            <h3>{p.id} {p.name} </h3>
                            <p> {p.price} </p>
                            <ProductImages pid={p.id}/>
                            <button onClick={()=>handleAddImage(p.id)}> Add Image </button>
                        </div>
                    );
                })}
            </InfiniteScroll>
        </div>
    );
};

export default ProductsPage;
