import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./cards.css";

const Cards = () => {
    const [playlist, setPlaylist] = useState();

    useEffect(() => {
        axios
          .get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/5135745864`)
          .then((response) => response.data.tracks.data)
          .then((data) => setPlaylist(data))
          .catch((error) => console.error(error))
    }, []);

    console.log(playlist)
    return(
        <div>

        </div>
    )
}

export default Cards;