import React from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { playerData } from "../shared/ListOfPlayers";


export default function Players() {
    return (
        
        <div className="container">
            {playerData.map((player) => (
                <Card sx={{ maxWidth: 400, margin:5}}>
                <CardMedia
                  sx={{ height: 340, width:400}}
                  image={player.img}
                  title={player.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {player.name}
                  </Typography>
                  
                </CardContent>
                <CardActions>
                  <Link to={`detail/${player.id}`}><Button size="small">Detail</Button></Link>
                  
                </CardActions>
              </Card>
            ))}
        </div>

    )

}
