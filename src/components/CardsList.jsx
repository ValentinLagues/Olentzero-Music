import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./cardslist.css";
import Card from "./Card";

const CardsList = () => {
    const [playlist, setPlaylist] = useState();


    useEffect(() => {
        axios
            .get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/66008470`)
            .then((response) => response.data.tracks.data)
            .then((data) => 
                setPlaylist(data)
            )
            .catch((error) => console.error(error))
    }, []);


    console.log(playlist)
    return(
        <div className="cards-containers">
            <div className="cards-containers-item" >
                {playlist &&
                playlist.map((track, index) => 
                    <Card cover={track.album.cover} title={track.title} track={track.preview} key={index} />
                )
                }
            </div>  
        </div>
    )
}

export default CardsList;