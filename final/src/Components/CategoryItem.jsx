// // CategoryItem.jsx
// import React from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import { mobile } from "../responsive";

// const Container = styled.div`
//   flex: 1;
//   margin: 10px; /* Add margin for spacing */
//   position: relative;
//   height: 400px; /* Increase the height */
//   border: 1px solid black; /* Add a black border */
// `;

// const StyledSwiper = styled(Swiper)`
//   width: 100%;
//   height: 100%;
// `;

// const StyledSwiperSlide = styled(SwiperSlide)`
//   width: 100%;
//   height: 100%;
// `;

// const Image = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;

// const Info = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

// const Title = styled.h1`
//   color: white;
//   margin: 20px;
// `;

// const Button = styled.button`
//   border: none;
//   padding: 10px;
//   background-color: white;
//   color: gray;
//   cursor: pointer;
//   font-weight: 600;
// `;

// const CategoryItem = ({ category }) => {
//   return (
//     <Container>
//       <Link to={`/products/${category._id}`}>
//         <StyledSwiper
//           modules={[Navigation, Pagination, Scrollbar, A11y]}
//           navigation
//           pagination={{ clickable: true }}
//           onSwiper={(swiper) => console.log(swiper)}
//           onSlideChange={() => console.log("slide change")}
//         >
//           <StyledSwiperSlide>
//             <Image src={`http://localhost:4000/${category.image}`} alt={category.categoryName} />
//           </StyledSwiperSlide>
//         </StyledSwiper>
//         <Info>
//           <Title>{category.categoryName}</Title>
//           <Button>SHOP NOW</Button>
//         </Info>
//       </Link>
//     </Container>
//   );
// };

// export default CategoryItem;


// import React from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import { mobile } from "../responsive";

// const Container = styled.div`
//   flex: 1;
//   margin: 3px;
//   height: 70vh;
//   position: relative;
// `;
// const Image = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   ${mobile({ height: "20vh" })}
// `;
// const Info = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;
// const Title = styled.h1`
//   color: white;
//   margin: 20px;
// `;
// const Button = styled.button`
//   border: none;
//   padding: 10px;
//   background-color: white;
//   color: gray;
//   cursor: pointer;
//   font-weight: 600;
// `;

// const CategoryItem = ({ category }) => {
//     console.log("Category:", category); // Log the category object
  
//     return (
//       <Container>
//         <Link to={`/products/${category._id}`}>
//           <Image src={`http://localhost:4000/${category.image}`} alt={category.categoryName} />
//           <Info>
//             <Title>{category.categoryName}</Title>
//             <Button>SHOP NOW</Button>
//           </Info>
//         </Link>
//       </Container>
//     );
//   };
  

// export default CategoryItem; 
// CategoryItem.jsx
// CategoryItem.jsx
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";
import "./categoryItem.css"

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 100%;
  position: relative;
  box-sizing: border-box;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover !important;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  margin: 10px;
  font-size:30px
  ${mobile({ fontSize:'10px'})}
`;
// const Title = styled.span`
//  color: white;
//  margin: 10px;
//  font-size: 50px;
//  font-weight:bold
//  ${mobile({ fontSize: 'small' })}
// `;

const Button = styled.button`
  border: none;
  padding: 8px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  ${mobile({    
     cursor:'pointer',
    height: '25px',
    fontSize: '8px',
    width: 'auto' })}
`;

const CategoryItem = ({ category }) => {
  return (
    <Container>
      
        <Image src={`http://localhost:4000/${category.image}`} alt={category.categoryName} />
        <Info>
          <Title className="BByhM">{category.categoryName}</Title>
          <Link to={`/products/${category._id}`}>
          
          <Button>SHOP NOW</Button>
          </Link>
        </Info>
     
    </Container>
  );
};

export default CategoryItem