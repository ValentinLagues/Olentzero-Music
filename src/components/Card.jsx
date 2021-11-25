import React from "react";
import ReactPlayer from "react-player";
import "./card.css";

const Card = ({ title, track, cover, number, image }) => {
  console.log(number);
  return (
    <div className="container">
      <img src={image} alt="{}" />
      <h1>{number}</h1>
      <ReactPlayer url={track} controls playing volume={0.1} />
    </div>
  );
};

export default Card;
