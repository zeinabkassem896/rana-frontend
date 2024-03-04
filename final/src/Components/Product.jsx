// import React from "react";
// import styled from "styled-components";
// import { SearchOutlined } from "@material-ui/icons";
// import { Link } from "react-router-dom";

// const Info = styled.div`
//   opacity: 0;
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   background-color: rgba(0, 0, 0, 0.2);
//   z-index: 3;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: all 0.5s ease;
//   cursor: pointer;
// `;

// const Container = styled.div`
//   flex: 1;
//   margin: 5px;
//   min-width: 280px;
//   height: 350px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: #f5fbfd;
//   position: relative;

//   &:hover ${Info} {
//     opacity: 1;
//   }
// `;

// const Circle = styled.div`
//   width: 200px;
//   height: 200px;
//   border-radius: 50%;
//   background-color: white;
//   position: absolute;
// `;

// const Image = styled.img`
//   height: 75%;
//   z-index: 2;
// `;

// const Icon = styled.div`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   background-color: white;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 10px;
//   transition: all 0.5s ease;

//   &:hover {
//     background-color: #e9f5f5;
//     transform: scale(1.1);
//   }
// `;

// const Tag = styled.div`
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   padding: 5px;
//   color: white;
//   font-weight: bold;
//   background-color: ${props => (props.bestSeller ? "#ff4d4f" : "#000")};
// `;

// const Title = styled.div`
//   position: absolute;
//   bottom: 50px;
//   left: 20px;
//   font-size: 18px;
//   font-weight: bold;
//   color: #333;
// `;

// const Price = styled.div`
//   position: absolute;
//   bottom: 20px;
//   left: 20px;
//   font-size: 16px;
//   color: #333;
// `;

// const Product = ({ item }) => {
//   return (
//     <Container>
//       <Circle />
//       <Image src={`http://localhost:4000/uploads/${item.images[0]}`} alt="" />
//       <Info>
//         <Icon>
//           <Link to={`/product/${item._id}`}>
//             <SearchOutlined />
//           </Link>
//         </Icon>
//       </Info>
//       <Tag bestSeller={item.bestSeller}>
//         {item.bestSeller ? "Sale" : "Out of Stock"}
//       </Tag>
//       <Title>{item.title}</Title>
//       <Price>${item.price}</Price>
//     </Container>
//   );
// };

// export default Product;

import React from 'react';
import { Link } from 'react-router-dom';
import { SearchOutlined } from '@material-ui/icons';
import "./BestProducts.css";
import "./demo.css";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useCart } from '../context/useCart';

const Product = ({ item }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (clickedItem) => {
    addToCart(clickedItem);
  };

  return (
    
    <div className="container bg-white col-lg-2 col-sm-4 d-flex flex-column align-items-center justify-content-center  ">
      <div key={item.id} className="d-flex flex-column  align-items-center justify-content-center product-item my-3">
        <div className="product">
        <Link to={`/product/${item._id}`}>
          <img src={`http://localhost:4000/uploads/${item.images[0]}`} alt="" />
          </Link>
          <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
            <li className="icon">
              <Link to={`/addToCart`}>
                <ShoppingBagIcon onClick={() => handleAddToCart(item)} />
              </Link>
            </li>
          </ul>
        </div>
        <div className={`tag ${item.bestSeller ? 'bg-red' : 'bg-black'}`}>{item.bestSeller ? 'sale' : 'out of stock'}</div>
        <div className="title pt-4 pb-1">{item.title}</div>
        <div className="price">$ {item.price}</div>
      </div>
    </div>
  );
}

export default Product;