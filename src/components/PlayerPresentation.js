import React, { useState } from "react";
import { PlayersData } from "../shared/ListOfPlayers";
//presentational component recieve data via prop
export default function PlayersPresentation({players}) {
    const[playerClick, setPlayer] = useState([])
    console.log(players);
    return (
        <div className="container">
            {players.map((player)=>(
                <div className="column">
                    <div className="card">
                    <img src={player.img}/>
                    <h3>{player.name}</h3>
                    <p className="title">{player.club}</p>
                    <p><button onClick={()=> {setPlayer(player)}}><a href="#popup1" id="openPopUp">Detail</a></button></p>
                    </div>
                </div>
            ))}
        <div id="popup1" className="overlay">
        
            <div className="popup">
            <img src={playerClick.img}></img>
            <h3>{playerClick.name}</h3>
            <a className="close" href="#">&times;</a>
            <p className="title">{playerClick.club}</p>
            <p className="content">{playerClick.info}</p>
        </div>
        
            
        </div>
        </div>
    )//reponsible for rendering ui based on recieved data(prop)
}
