// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import axios from "axios";
// import { v4 as uuidv4 } from "uuid";
// import Product from "./Product";

// const Container = styled.div`
//   padding: 20px;
//   display: flex;
//   flex-wrap: wrap;
//   flex-direction:row;
//   justify-content: space-between;
// `;

// const Products = ({ cat, filters, sort }) => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         const response = await axios.get(
//           cat
//             ? `http://localhost:4000/api/products/category/${cat}`
//             : "http://localhost:4000/api/products"
//         );

//         if (response.data.success && response.data.data) {
//           setProducts(response.data.data);
//           console.log('aaaaaaaaaa',response.data.data)
//         } else {
//           console.error(
//             "Invalid or empty data received from the server:",
//             response.data
//           );
//         }
//       } catch (err) {
//         console.error("Error fetching products:", err.message);
//       }
//     };

//     getProducts();
//   }, [cat]);

  

//   useEffect(() => {
//     const applyFilters = () => {
//       let filteredProducts = [...products];

//       // Apply filters
//     //   for (const [key, value] of Object.entries(filters)) {
//     //     filteredProducts = filteredProducts.filter((item) =>
//     //       item[key].includes(value)
//     //     );
//     //   }
//     // Apply filters
// for (const [key, value] of Object.entries(filters)) {
//     filteredProducts = filteredProducts.filter((item) =>
//       item[key] && item[key].includes(value)
//     );
//   }
  

//       // Apply sorting
//       if (sort === "newest") {
//         filteredProducts.sort((a, b) => a.createdAt - b.createdAt);
//       } else if (sort === "asc") {
//         filteredProducts.sort((a, b) => a.price - b.price);
//       } else if (sort === "desc") {
//         filteredProducts.sort((a, b) => b.price - a.price);
//       }

//       setFilteredProducts(filteredProducts);
//     };

//     applyFilters();
//   }, [products, filters, sort]);

//   return (
//     <div className="row mx-3">
//       {filteredProducts.map((item) => (
//         <Product item={item} key={uuidv4()} />
//       ))}
//       </div>
//   );
// };

// export default Products;

// Products.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort, filteredProductsALL }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
  console.log('check cat',cat)
    const getProducts = async () => {
      try {
        const response = await axios.get(
          cat != undefined
            ? `http://localhost:4000/api/products/category/${cat}`
            : "http://localhost:4000/api/products"
        );

        // const response = await axios.get("http://localhost:4000/api/products");
        console.log("rrr ", response.data)

        if (response.data.status == 200) {
          setProducts(response.data.data);
          setFilteredProducts(response.data.data);
        } else {
          console.error("Invalid or empty data received from the server:", response.data);
        }
      } catch (err) {
        console.error("Error fetching products:", err.message);
      }
    };

    getProducts();
  }, [cat]);

  useEffect(() => {
    const applyFilters = () => {
      let filteredProduct = [...filteredProductsALL];

      for (const [key, value] of Object.entries(filters)) {
        filteredProduct = filteredProducts.filter((item) =>
          item[key] && item[key].includes(value)
        );
      }

      // Apply sorting
      if (sort === "newest") {
        filteredProduct.sort((a, b) => a.createdAt - b.createdAt);
      } else if (sort === "asc") {
        filteredProduct.sort((a, b) => a.price - b.price);
      } else if (sort === "desc") {
        filteredProduct.sort((a, b) => b.price - a.price);
      } else if (sort === "az") {
        filteredProduct.sort((a, b) => a.title.localeCompare(b.title));
      } else if (sort === "za") {
        filteredProduct.sort((a, b) => b.title.localeCompare(a.title));
      } else if (sort === "oldtonew") {
        filteredProduct.sort((a, b) => a.createdAt - b.createdAt);
      } else if (sort === "newtoold") {
        filteredProduct.sort((a, b) => b.createdAt - a.createdAt);
      }

      setFilteredProducts(filteredProduct);
    };

    applyFilters();
  }, [filters, sort]);



  useEffect(() => {
    setFilteredProducts(filteredProductsALL)
    
  }, [filteredProductsALL]);

  return (
    <Container>
      {console.log("ll ",cat)}
      {filteredProducts.map((item) => (
        <Product item={item} key={uuidv4()} />
      ))}
    </Container>
  );
};

export default Products;