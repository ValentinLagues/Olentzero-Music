import React from "react";
import ReactPlayer from "react-player";
import Lottie from "react-lottie";
import "./card.css";
import "./cardslist.css";

const Card = ({
  track,
  number,
  image,
  lottie,
  activeCard,
  setActiveCard,
  cardReturn,
  setCardReturn,
}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottie,
  };

  return (
    <>
      <div
        className={`day-${number} cards-container`}
        id={`card-container-image${number}`}
        onClick={() =>
          activeCard === number ? setActiveCard(0) : setActiveCard(number)
        }
      >
        {cardReturn !== number && (
          <>
            <div onClick={() => setCardReturn(number)} className="overlay">
              <h1>{number}</h1>
            </div>
            <img src={image} alt={number} />
          </>
        )}

        {activeCard === number && (
          <div onClick={() => setCardReturn(0)} className={`lottie${number}`}>
            <ReactPlayer
              url={track}
              controls
              //Modifié le width et le height pour accèdé au player
              width="0"
              height="0"
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
