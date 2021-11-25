import React, { useState} from "react";
import "./cardslist.css";
import Card from "./Card";

const CardsList = () => {
  const [playlist, setPlaylist] = useState();



  return (
    <div>
      {playlist &&
        playlist.map((track, index) => (
          <Card
            cover={track.album.cover}
            title={track.title}
            track={track.track}
            key={index}
          />
        ))}
    </div>
  );
};

export default CardsList;
