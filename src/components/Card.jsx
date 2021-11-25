import React from "react";
import ReactPlayer from 'react-player';
import "./card.css";

const Card = ({title, track, cover}) => {

    return(
        <div>
            <img src={cover} alt="{}" />
            <h1>{title}</h1>
            <ReactPlayer url={track} controls playing volume={0.1} />
        </div>
    )
}

export default Card;