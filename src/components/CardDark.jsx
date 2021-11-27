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
              width="100%"
              height="30px"
              url={track}
              //controls
              playing={activeDarkCard === number}
              volume={0.1}
            />
            <Lottie options={defaultOptions} />
          </div>
        )}
      </div>
    </>
  );
};
export default CardDark;
