// import "./productsAddForm.css";
// import { useState, useEffect } from "react";
// import axios from "axios";

// const AddProductForm = ({ refresh, setIsOpen }) => {
//   const [collections, setCollections] = useState([]);
//   const [data, setData] = useState({
//     image: null,
//     price: "12",
//     color: "red",
//     fabric: "aa",
//     quantity: "15",
//     bestSeller: false,
//     description: 12,
//     collectionId: "",
//   });

//   useEffect(() => {
//     const fetchCollections = async () => {
//       const response = await axios.get(
//          "http://localhost:4000/api/collections"
//       );
//       setCollections(response.data.data);
//     };
//     fetchCollections();
//   }, [refresh]);

//   const handleAddProduct = async (e) => {
//     e.preventDefault();

//     try {
//       const fData = new FormData();
//       fData.append("image", data.image);
//       fData.append("price", data.price);
//       fData.append("color", data.color);
//       fData.append("fabric", data.fabric);
//       fData.append("quantity", data.quantity);
//       fData.append("bestSeller", data.bestSeller);
//       fData.append("description", data.description);
//       fData.append("collectionId", data.collectionId._id);
//       const response = await axios.post(
//         import.meta.env.VITE_API_ENDPOINT + "api/products",
//         fData
//       );
//       console.log(response);
//       refresh("a");
//       setIsOpen(false);
//     } catch (error) {
//       // Check if the response status is 400
//       if (error.response && error.response.status === 404) {
//         // Display the error message to the user
//         alert(error.response.data.message);
//       } else {
//         console.log(error.message);
//       }
//     }
//   };

//   return (
//     <div className="form-container-product">
//       <form onSubmit={handleAddProduct} className="form-submit-product">
//         <div className="inputs-container">
//           <div className="input-label-container-product">
//             <label className="label-product">
//               Product Price
//               <input
//                 type="text"
//                 value={data.price || ""}
//                 onChange={(e) => {
//                   setData({ ...data, price: e.target.value });
//                 }}
//               />
//             </label>
//           </div>
//           <div className="input-label-container-product">
//             <label className="label-product">
//               Product Color
//               <input
//                 type="text"
//                 value={data.color || ""}
//                 onChange={(e) => {
//                   setData({ ...data, color: e.target.value });
//                 }}
//               />
//             </label>
//           </div>
//           <div className="input-label-container-product">
//             <label className="label-product">
//               Product Fabric
//               <input
//                 type="text"
//                 value={data.fabric || ""}
//                 onChange={(e) => {
//                   setData({ ...data, fabric: e.target.value });
//                 }}
//               />
//             </label>
//           </div>
//           <div className="input-label-container-product">
//             <label className="label-product">
//               Product Quantity
//               <input
//                 type="text"
//                 value={data.quantity || ""}
//                 onChange={(e) => {
//                   setData({ ...data, quantity: e.target.value });
//                 }}
//               />
//             </label>
//           </div>
//           <div className="input-label-container-product">
//             <label className="label-product">
//               BestSeller
//               <select
//                 value={data.bestSeller}
//                 onChange={(e) => {
//                   setData({ ...data, bestSeller: e.target.value === 'true' });
//                 }}
//               >
//                 <option value={true}>True</option>
//                 <option value={false}>False</option>
//               </select>
//             </label>
//           </div>
//           <div className="input-label-container-product">
//             <label className="label-product" htmlFor="ProductName">
//               Collection:
//             </label>
//             <select
//               value={data.collectionId._id || ""}
//               onChange={(e) => {
//                 setData({
//                   ...data,
//                   collectionId: {
//                     ...data.collectionId,
//                     _id: e.target.value,
//                   },
//                 });
//               }}
//               required
//               className="option-category"
//             >
//               <option value="">Select a collection</option>
//               {collections.map((collection) => (
//                 <option value={collection._id} key={collection._id}>
//                   {collection.name}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="input-label-container-product">
//             <label className="label-product">
//               Product Image
//               <input
//                 type="file"
//                 onChange={(e) => {
//                   setData({ ...data, image: e.target.files[0] });
//                 }}
//               />
//               <div className="custom-file-input">Choose File</div>
//               <div className="selected-file-name">
//                 {data.image ? data.image.name : "No file chosen"}
//               </div>
//             </label>
//           </div>

//           <div className="input-label-container-product">
//             <label className="label-product">
//               Product Description
//               <textarea
//                 rows={5}
//                 cols={65}
//                 value={data.description || ""}
//                 onChange={(e) => {
//                   setData({ ...data, description: e.target.value });
//                 }}
//               />
//             </label>
//           </div>
//         </div>
//         <div className="product-buttons-container">
//           <div className="cancel-product-1">
//             <button
//               className="cancel-button-product"
//               onClick={() => {
//                 setIsOpen(false);
//               }}
//             >
//               Cancel
//             </button>
//           </div>
//           <div className="add-product-1">
//             <button className="add-button-product" type="submit">
//               Add
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddProductForm;
