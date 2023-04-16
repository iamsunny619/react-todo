import React from "react";
import { Link } from "react-router-dom";
import products from "../Network/product/data";
export default function Products() {
  return (<>
    <section className="section">
      <h2>Products</h2>
      <div className="products">
        {
          products.map((product)=>{
            return <article key={product.id}>
              <h4>
                {product.name}
              </h4>
            <Link to={'/products/'+ product.id}>MoreInfo</Link>
            </article>
          })
        }
      </div>
    </section>
  </>)
}
