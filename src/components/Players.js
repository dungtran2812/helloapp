import React from "react";
import { Link } from "react-router-dom";
import { playerData } from "../shared/ListOfPlayers";
export default function Players() {
    return (
        <div className="container">
            {playerData.map((player) => (
                <div className="column">
                    <div className="card">
                        <img src={player.img} />
                        <h3>{player.name}</h3>
                        <p className="title">{player.club}</p>
                        <Link to={`detail/${player.id}`}><p><button>Detail</button></p></Link>
                        
                    </div>
                </div>
            ))}
        </div>

    )

}
