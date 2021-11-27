import React from "react";
import ReactPlayer from "react-player";
import Lottie from "react-lottie";
import "./card.css";
import "./cardslist.css";

const CardDark = ({
  track,
  number,
  image,
  lottie,
  activeDarkCard,
  setActiveDarkCard,
  cardDarkReturn,
  setCardDarkReturn,
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
        id={`card-container-image-dark${number}`}
        onClick={() =>
          activeDarkCard === number
            ? setActiveDarkCard(0)
            : setActiveDarkCard(number)
        }
      >
        {cardDarkReturn !== number && (
          <>
            <div onClick={() => setCardDarkReturn(number)} className="overlay">
              <h1>{number}</h1>
            </div>
            <img src={image} alt={number} />
          </>
        )}

        {activeDarkCard === number && (
          <div
            onClick={() => setCardDarkReturn(0)}
            className={`lottie${number}`}
          >
            <ReactPlayer
              url={track}
              controls
              //Modifié le width et le height pour accèdé au player
              width="0"
              height="0"
              playing={activeDarkCard === number}
              volume={0.8}
            />
            <Lottie options={defaultOptions} />
          </div>
        )}
      </div>
    </>
  );
};
export default CardDark;
