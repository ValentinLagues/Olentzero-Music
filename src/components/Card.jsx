import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./card.css";
import "./cardslist.css";

const Card = ({ track, number, image, activeCard, setActiveCard }) => {
  const [cardReturn, setCardreturn] = useState(true);

  return (
    <>
      <div
        className={`day-${number} cards-container`}
        onClick={() =>
          activeCard === number ? setActiveCard(0) : setActiveCard(number)
        }
      >
        {cardReturn && (
          <>
            <div onClick={() => setCardreturn(!cardReturn)} className="overlay">
              <h1>{number}</h1>
            </div>
            <img src={image} alt="{}" />
          </>
        )}

        {!cardReturn && (
          <div>
            <ReactPlayer
              width="0"
              url={track}
              controls
              playing={activeCard === number}
              volume={0.1}
            />
          </div>
        )}
      </div>
    </>
  );
};
export default Card;
