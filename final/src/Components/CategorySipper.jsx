// import React from "react";
// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
// import SwiperCore, { Navigation } from "swiper";;

// SwiperCore.use([Navigation]);

// const Container = ({ children }) => <div>{children}</div>;

// const CategorySwiper = ({ categories }) => {
//   return (
//     <Container>
//       <Swiper
//         spaceBetween={10}
//         navigation
//         breakpoints={{
//           640: {
//             slidesPerView: 2,
//           },
//           768: {
//             slidesPerView: 3,
//           },
//           1024: {
//             slidesPerView: 4,
//           },
//         }}
//       >
//         {categories.map((category) => (
//           <SwiperSlide key={category._id}>
//             <Link
//               to={`/products/${category._id}`}
//               style={{ textDecoration: "none" }}
//             >
//               <CategoryItem category={category} />
//             </Link>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </Container>
//   );
// };

// export default CategorySwiper;
