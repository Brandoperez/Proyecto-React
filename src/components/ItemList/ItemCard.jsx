import React from 'react'

import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
  } from "@mui/material";

  import { Link } from 'react-router-dom';

export const ItemCard = ({item}) => {
  return (
    <Card sx={{ Width: 345, height: 350 }}>
      <CardMedia sx={{ height: 140 }} image={item.img} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Agregar</Button>
       <Link to={`/itemDetail/${item.id}`}><Button size="small">Ver Detalle</Button></Link> 
      </CardActions>
    </Card>
  )
}
