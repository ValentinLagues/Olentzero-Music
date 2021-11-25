import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./cardslist.css";
import Card from "./Card";

const CardsList = () => {
    const [playlist, setPlaylist] = useState();
    const [track, setTrack] = useState([]);

    useEffect(() => {
        axios
            .get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/5135745864`)
            .then((response) => response.data.tracks.data)
            .then((data) => 
            setPlaylist(data)
            )
          .catch((error) => console.error(error))
    }, []);

    console.log(playlist)
    return(
        <div>
            {playlist &&
            playlist.map((track, index) => 
                <Card cover={track.album.cover} title={track.title} track={track.track} key={index} />
            )
            }
                
        </div>
    )
}

export default CardsList;