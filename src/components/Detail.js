import { Link, useParams } from "react-router-dom";
import { playerData } from "../shared/ListOfPlayers";
import LiveTvIcon from '@mui/icons-material/LiveTv';
import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import Popup from "./Popup";
export default function Detail() {
    const userName = useParams();
    const player = playerData.find(obj => {
        return obj.id === userName.id;
    });
    let cost = player.cost.toLocaleString();
    return (
        <Card sx={{ maxWidth: 1200, margin: 5 }}>
            <CardMedia
                sx={{ height: 600, width: 1200 }}
                image={`../${player.img}`}
                title={player.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {player.name}
                </Typography>
                <Typography gutterBottom variant="h4" component="div">
                    {`Market value: € ${player.cost.toLocaleString()}`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
            {player.info}
          </Typography>
            </CardContent>
            <CardActions>
                <Popup player={player}/>

            </CardActions>
        </Card>
        //    <div className="card">
        //        <div className="badge">{player.name}</div>
        //        <div className="product-tumb">
        //            <img src={`../${player.img}`} alt = ''/>
        //        </div>
        //        <div className="product-details">
        //            <h4>{player.club}</h4>
        //            <div className="product-price">{cost}</div>
        //            <p>{player.info}</p>
        //            <div className="product-bottom-details"></div>
        //        </div>

        //    </div>

    )
}

