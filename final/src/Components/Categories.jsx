// // Categories.jsx
// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import CategoryItem from "./CategoryItem";
// import axios from "axios";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import { mobile } from "../responsive";

// const Container = styled.div`
//   display: flex;
//   padding: 20px;
//   justify-content: space-between;
//   flex-wrap: wrap; /* Allow categories to wrap to the next line */
//   ${mobile({ padding: "0px", flexDirection: "column" })}
// `;

// const StyledSwiper = styled(Swiper)`
//   width: 100%;
//   height: 400px; /* Match the CategoryItem height */
// `;

// const StyledSwiperSlide = styled(SwiperSlide)`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   margin-bottom: 20px; /* Add margin for spacing */
// `;

// const Categories = () => {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get("http://localhost:4000/api/categories");
//         setCategories(response.data.data);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   return (
//     <Container>
//       <StyledSwiper
//         modules={[Navigation, Pagination, Scrollbar, A11y]}
//         slidesPerView={3}
//         spaceBetween={20} /* Add space between slides */
//         navigation
//         pagination={{ clickable: true }}
//         onSwiper={(swiper) => console.log(swiper)}
//         onSlideChange={() => console.log("slide change")}
//       >
//         {categories.map((item) => (
//           <StyledSwiperSlide key={item._id}>
//             <CategoryItem category={item} />
//           </StyledSwiperSlide>
//         ))}
//       </StyledSwiper>
//     </Container>
//   );
// }

// export default Categories;


// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import CategoryItem from "./CategoryItem"; 
// import axios from "axios";
// import { mobile } from "../responsive";



// const Container = styled.div`
//   display: flex;
//   padding: 20px;
//   justify-content: space-between;
//   ${mobile({ padding: "0px", flexDirection: "column" })}
// `;

// const Categories = () => {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get("http://localhost:4000/api/categories");
//         setCategories(response.data.data);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   return (
//     <Container>
//       {categories.map((item) => (
//         <CategoryItem key={item._id} category={item} />
//       ))}
//     </Container>
//   );
// }

// export default Categories; 

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";
import"./Categories.css";

const Container = styled.div`
  display: flex;
  padding: 170px; /* Adjusted padding */
  padding-top:180px ;
  margin-left:40px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column", marginTop:'20px',marginBottom:'-70px' })}
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px; 
 
`;
const Title = styled.h2`
  font-size: 34px;
  font-weight: bold;
  color: #333;
  text-transform: uppercase;
  margin: 0;
  padding: 0 20px;
  
`;
// const Title = styled.h2`
//   font-size: 34px;
//   font-weight: bold;
//   color: #333;
//   text-transform: uppercase;
//   position: relative;
//   margin: 0;
//   padding: 0 20px;
//   &:after {
//     content: "";
//     position: absolute;
//     bottom: -10px;
//     left: 0;
//     width: 100%;
//     height: 2px;
//     background-color: #333;
//   }
// `;

const CategoriesWrapper = styled.div`
  width: 100%;
  height: 40vh; /* Reduced height */
  ${mobile({ height: "20vh",justifyContent:'center',margin:'auto' })}
`;

const CategorySwiper = styled(Swiper)`
  width: 90%;
  height: 120%;
  ${mobile({ marginRight:'130px', width:'90%'})}
`;


// const Container = styled.div`
//   display: flex;
//   padding: 20px; /* Adjusted padding for better spacing */
//   justify-content: space-between;
//   ${mobile({ flexDirection: "column", padding: "10px" })}
// `;

// const TitleContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-bottom: 20px; /* Add spacing here */
// `;

// const Title = styled.h2`
//   font-size: 24px;
//   font-weight: bold;
//   color: #333;
//   text-transform: uppercase;
//   position: relative;
//   margin: 0;
//   padding: 0 20px;
//   &:after {
//     content: "";
//     position: absolute;
//     bottom: -10px;
//     left: 0;
//     width: 100%;
//     height: 2px;
//     background-color: #333;
//   }
// `;

// const CategoriesWrapper = styled.div`
//   width: 100%;
//   height: 40vh; /* Reduced height */
//   ${mobile({ height: "20vh" })}
// `;

// const CategorySwiper = styled(Swiper)`
//   width: 100%;
//   height: 100%;
// `;

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/categories");
        setCategories(response.data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <Container>
      <CategoriesWrapper>
        <TitleContainer className="lala-incres">
          <Title className="cor-categ"><span className="border-red pe-2">Cate</span>gories</Title>
        </TitleContainer>
       {/* <div className="help"> */}
        <CategorySwiper className="any-solt-to"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
        >
          {categories.map((category) => (
            <SwiperSlide key={category._id}>
              <CategoryItem category={category} />
            </SwiperSlide>
          ))}
        </CategorySwiper>
        {/* </div> */}
      </CategoriesWrapper>
      
    </Container>
  );
};

export default Categories;