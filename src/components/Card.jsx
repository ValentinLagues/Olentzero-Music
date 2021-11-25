import React, {useState} from "react";
import ReactPlayer from 'react-player';
import "./card.css";

const Card = ({title, track, cover}) => {
    const [display, setDisplay] = useState(true);
    // const [cadClass, setCardClass] = useState("card-container");

    // console.log(cardClass)
    return(
        <>
        {display &&
            <div className="card-container" onClick={() => setDisplay(false)}>
                <ReactPlayer className="track-player" url={track} controls  volume={0.1} />
            </div>
        }
        </>

    )
}

export default Card;