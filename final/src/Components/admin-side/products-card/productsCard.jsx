import "./productsCard.css";
import axios from "axios";


const ProductsAdmin = ({ product, handleChangeObject, refresh }) => {
  const deleteProduct = async (id) => {
    try {
      const response = await axios.delete( `http://localhost:4000/api/products/${product._id}`
      );
      console.log(response.data);
      refresh("a");
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="Products-admin-container"> 
      <div className="card-product" key={product._id}>
        <div className="products-img-container">
        <img src={`http://localhost:4000/api/${product.image}`} alt="" />
        </div>
     
        <div className="card-content-Products">
          {/* product name */}
        <p className="card-text-categoryName-product">{product.collectionId?.name}</p>  
          {/* category name */} 
          <p className="card-text-categoryName-product">{product.name}</p> 
          <p className="card-text-categoryName-product">{product.price}</p> 
          <p className="card-text-categoryName-product">{product.color}</p> 
          <p className="card-text-categoryName-product">{product.fabric}</p> 
          <p className="card-text-categoryName-product">{product.quantity}</p> 
          <p className="card-text-categoryName-product">{product.bestSeller}</p> 
          <p className="card-text-categoryName-product">{product.description}</p> 
          <div className="button-container-Products">
          <span className="edit-span">
            <button
              className="edit-button"
              onClick={() => {
                handleChangeObject(product);
              }}
            >
              <svg
                className="svg-icon"
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke="#a649da" strokeLinecap="round" strokeWidth="2">
                  <path d="m20 20h-16"></path>
                  <path
                    clipRule="evenodd"
                    d="m14.5858 4.41422c.781-.78105 2.0474-.78105 2.8284 0 .7811.78105.7811 2.04738 0 2.82843l-8.28322 8.28325-3.03046.202.20203-3.0304z"
                    fillRule="evenodd"
                  ></path>
                </g>
              </svg>
              <span className="lable">Edit</span>
            </button>
          </span>
            <span className="delete-span">
              <button type="button" className="delete-button" onClick={() =>{if (window.confirm("Are you sure you want to delete this user?")) {
                deleteProduct(product._id);
              }}}>
                <span className="button__text">Delete</span>
                <span className="button__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    viewBox="0 0 512 512"
                    height="25"
                    className="svg"
                  >
                    <path
                        style={{
                          fill: 'none',
                          stroke: ' #A649DA',
                          strokeLinecap: 'round',
                          strokeLinejoin: 'round',
                          strokeWidth: '32px',
                        }}
                    ></path>
                    <line
                      y2="112"
                      y1="112"
                      x2="432"
                      x1="80"
                      style={{
                        stroke: ' #A649DA',
                        strokeLinecap: 'round',
                        strokeMiterlimit: 10,
                        strokeWidth: '32px',
                      }}
                    ></line>
                    <path
                      style={{
                        fill: 'none',
                        stroke: ' #A649DA',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeWidth: '32px',
                      }}
                      d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40"
                    ></path>
                    <line
                      y2="400"
                      y1="176"
                      x2="256"
                      x1="256"
                      style={{
                        fill: 'none',
                        stroke: ' #A649DA',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeWidth: '32px',
                      }}
                    ></line>
                    <line
                      y2="400"
                      y1="176"
                      x2="192"
                      x1="184"
                      style={{
                        fill: 'none',
                        stroke: ' #A649DA',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeWidth: '32px',
                      }}
                    ></line>
                    <line
                      y2="400"
                      y1="176"
                      x2="320"
                      x1="328"
                      style={{
                        fill: 'none',
                        stroke: ' #A649DA',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeWidth: '32px',
                      }}
                    ></line>
                  </svg>
                </span>
              </button>
            </span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsAdmin;
