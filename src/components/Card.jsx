import React from "react";
import ReactPlayer from "react-player";
import "./card.css";

const Card = ({ track, number, image, setActiveId, activeId }) => {


    return (
        <div
        className="container"
        onClick={() => {
            setActiveId(number)
        }}>
            <img src={image} alt={number} />
            <h1>{number}</h1>
            <ReactPlayer className="player" url={track} playing={activeId === number} volume={0.1} />
        </div>
    );
};

export default Card;
