import React from "react";
import "./product.css";

interface IProduct {
  name: string;
  seller: string;
  price: number;
  original_price: number | null;
  image: string;
  description: string;
  shipping: {
    free_shipping: boolean;
    logistic_type: string;
  };
}

const ContainerProduct = ({
  name,
  seller,
  price,
  original_price,
  image,
  description,
  shipping,
}: IProduct) => {
  console.log(original_price);
  return (
    <li className="row cont-product">
      <img src={image} alt="" loading="lazy" />
      <div className="column">
        <span id="name">{name}</span>
        <span id="seller">{seller}</span>
        <span id="description">{description}</span>
        {original_price!=null ? <span id="original-price">${original_price}</span>:<></>}
        <span id="price">$  {price}</span>
        {shipping.free_shipping === true ? (
          shipping.logistic_type === "fulfillment" ? (
            <span id="shipping-full">Envio Full</span>
          ) : (
            <span id="shipping">Envio Gratis</span>
          )
        ) : (
          <></>
        )}
      </div>
    </li>
  );
};

export default ContainerProduct;
