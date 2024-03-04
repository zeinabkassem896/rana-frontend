import React, { useState, useEffect } from "react";
import { Checkbox } from "@mui/material";
import "./admin-order.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const AdminOrder = () => {
  const params = useParams();
  const [order, setOrder] = useState({});

  useEffect(() => {
    const fetchSingleOrderById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/orders/${params.id}`
        );
        setOrder(response.data.data);
        console.log("single", response.data.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchSingleOrderById();
  }, []);

  return (
    <div className="order-details">
      <h2 className="order-details__title">Order Details</h2>
      <div className="order-details__receiver-info">
        <div className="infoOrderReceiverDetails">
          {" "}
          <p>
            <strong>Receiver Name:</strong>{" "}
            {order.deliveryAddress?.receiverName}
          </p>
          <p>
            <strong>Phone:</strong> {order.deliveryAddress?.phone}
          </p>
        </div>
        <div className="infoOrderReceiverDetails">
          <p>
            <strong>City:</strong> {order.deliveryAddress?.street}{" "}
          </p>
          <p>
            <strong>Street:</strong> {order.deliveryAddress?.street}
          </p>
          <p>
            <strong>Building:</strong> {order.deliveryAddress?.building}
          </p>
        </div>
        <div className="infoOrderReceiverDetails">
          <p>
            <strong>Address Details / Notes:</strong>{" "}
            {order.deliveryAddress?.addressDetails}
          </p>
        </div>
      </div>
      <br />
      <div className="order-details__products">
        <div className="order-details__products__Headings">
          <h3>Products</h3>
          <span>
            {" "}
            <h3>Price</h3>
            <h3>Qty</h3>
            <h3>Color</h3>
            <h3>Fabric</h3>
          </span>
        </div>
        <hr />

        <ul>
          {order.products?.map((product, index) => (
            <div className="order-details-products">
              <span className="product-name">
                {product.productId?.collectionId?.name}
              </span>

              <li key={index}>
                <span className="product-image">
                  <img
                    width={200}
                    src={
                      `http://localhost:4000/api/${
                      product?.productId?.image
                    }`}
                    alt=""
                  />
                </span>

                <span className="product-price">${product?.price}</span>
                <span className="product-quantity">{product?.quantity}</span>
                <span className="product-color">
                  {product?.productId?.color}
                </span>
                <span className="product-fabric">
                  {product?.productId?.fabric}
                </span>
              </li>
              <hr />
              <br />
            </div>
          ))}
        </ul>
        <p className="order-details__total-price">
          <strong>Total Price:</strong> ${order.totalAmount}
        </p>
      </div>
    </div>
  );
};
export default AdminOrder;
