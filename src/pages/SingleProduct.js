import React from "react";
import { Link, useParams } from "react-router-dom";
import products from "../Network/product/data";
export default function SingleProduct() {
  const { productId } = useParams();
  const product = products.find((product) => {
    return product.id === productId;
  });
  const { image, name } = product;
  return (
    <>
      <section className="section">
        <img src={image} alt={name} />
        <h4>{name}</h4>
      </section>
      <Link to="/products"> back</Link>
    </>
  );
}
