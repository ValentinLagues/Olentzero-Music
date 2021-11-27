import React, { useState } from "react";
import ReactPlayer from "react-player";
import Lottie from "react-lottie";
import "./card.css";
import "./cardslist.css";

const CardDark = ({
  track,
  number,
  image,
  lottie,
  activeCard,
  setActiveCard,
}) => {
  const [cardDarkReturn, setCardDarkreturn] = useState(true);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottie,
  };

  return (
    <>
      <div
        className={`day-${number} cards-container`}
        id={`image-dark${number}`}
        onClick={() =>
          activeCard === number ? setActiveCard(0) : setActiveCard(number)
        }
      >
        {cardDarkReturn && (
          <>
            <div
              onClick={() => setCardDarkreturn(!cardDarkReturn)}
              className="overlay"
            >
              <h1>{number}</h1>
            </div>
            <img src={image} alt="{}" />
          </>
        )}

        {!cardDarkReturn && (
          <div
            onClick={() => setCardDarkreturn(!cardDarkReturn)}
            className={`lottie${number}`}
          >
            <ReactPlayer
              width="0"
              height="0"
              url={track}
              controls
              playing={activeCard === number}
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
