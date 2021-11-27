import React, { useState } from "react";
import ReactPlayer from "react-player";
import Lottie from "react-lottie";
import "./card.css";
import "./cardslist.css";

const Card = ({ track, number, image, lottie, activeCard, setActiveCard }) => {
  const [cardReturn, setCardreturn] = useState(true);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottie,
  };

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
          <div onClick={() => setCardreturn(!cardReturn)}>
            <ReactPlayer
              width="0"
              height="0"
              url={track}
              controls
              playing={activeCard === number}
              volume={0.8}
            />
            <Lottie options={defaultOptions} />
          </div>
        )}
      </div>
    </>
  );
};
export default Card;
