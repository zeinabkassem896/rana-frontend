import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./BestSellerSwiper.css";
import "../CollectionCard/CollectionCard.css";

const BestSellerSwiper = () => {
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_API_ENDPOINT + "api/products",
          {
            params: {
              bestSeller: true,
            },
          }
        );
        console.log("best", response.data);
        setBestSellers(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBestSellers();
  }, []);
  
const productIdIndex = (productArray, productId) => {
  return productArray?.findIndex((arrayId) => arrayId === productId);
};
  return (
    <>
      <div className="best-seller">
        <div className="best-seller-title">Bestseller</div>
        
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <div className="best-seller-container">
            {bestSellers.map((product) => (
              
              <SwiperSlide key={product._id}>
                <Link
                  to={`/products/${product.collectionId._id}`}
                  state={{
                    collectionId: product.collectionId._id,
                    productIndexInCollection: productIdIndex(product?.collectionId?.products,product?._id),
                  }}
                >
                  {" "}
                  <div className="best-seller-box">
                    <img
                      src={import.meta.env.VITE_API_ENDPOINT + product.image}
                      alt={product.collectionId.collectionName}
                      className="box-image"
                    />
                    <div className="best-seller-text">
                      <div className="best-seller-name">
                        {product.collectionId.name}
                      </div>
                      <div className="best-seller-category">
                        {product.collectionId.categoryId.categoryName}
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </>
  );
};
export default BestSellerSwiper;
