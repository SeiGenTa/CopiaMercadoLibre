import React from "react";
import "./card_advertising.css";

const CardAdvertising = ({
  img,
  tittle,
  textButton,
  description,
  url,
}: {
  img: JSX.Element;
  tittle: string;
  textButton: string;
  description: string;
  url: string;
}) => {
  return (
    <div id="card-advertising">
      <h2>{tittle}</h2>
      <div className="card-advertising-img">{img}</div>
      <p>{description}</p>
      <a href={url}>{textButton}</a>
    </div>
  );
};

export default CardAdvertising;
