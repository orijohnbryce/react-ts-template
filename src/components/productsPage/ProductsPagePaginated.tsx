import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { getPaginatedProducts, getPaginatedProductsWithImages } from "../../client/productApi";
import { AddImage } from "../addImage/AddImage";
import { siteConfig } from "../../siteConfig";
import "./ProductsPage.css"

const ProductsPagePaginated = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<number | undefined>()
  const [showModal, setShowModal] = useState<boolean>(false);
  
  const loadMoreProducts = async () => {
    // const newProducts = await getPaginatedProducts(page);
    const newProducts = await getPaginatedProductsWithImages(page);
    if (newProducts.length === 0) setHasMore(false);
    else {
      setProducts([...products, ...newProducts]);
      setPage(page + 1);
    }
  };

  const handleAddImage = (pid:number) => {
    setSelectedProduct(pid);
    setShowModal(true);
  };

  return (
    <div>      
      <br/>
      <br/>
      <br/>
      {showModal&& <AddImage pid={selectedProduct as number} setShowModal={setShowModal} showModal={showModal} />}
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMoreProducts}
        hasMore={hasMore}
        loader={<div key={0}>Loading...</div>}
      >
        {products.map((p: any) => (
          <div key={p.id} className="p-card">
            <h3>
              {p.name} - {p.id}
            </h3>
            <p>{p.price}</p>
            {p.imageUrl && <img className="p-image" src={siteConfig.BASE_URL + "image/" + p.imageUrl} alt="fs" />}
            <br/>
            <button onClick={() => handleAddImage(p.id)}> Add Image </button>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default ProductsPagePaginated;
