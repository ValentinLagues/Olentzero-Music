import React, {useState} from "react";
import ReactPlayer from 'react-player';
import "./card.css";

const Card = ({track}) => {
    const [playing, setPlaying] = useState(false);

    // console.log(image[0])

    return(
        <div className="card-container" onClick={() => setPlaying(true)}>
            <ReactPlayer className="track-player" url="https://www.youtube.com/watch?v=eVGryXWSMe0" playing={playing} volume={0.1} />
        </div>
    )
}

export default Card;