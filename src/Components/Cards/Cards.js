import React  from 'react';
import { Card,CardActionArea, Typography } from '@material-ui/core';
import classes from './Cards.module.css';

const Cards = (props) => {
  let launch=null;
  let land=null;
  if(props.successLaunch)
  {
    launch=<Typography><strong>Successful Launch: </strong> <span style= {{color:'gray'}}>True</span> </Typography>
  }
  else{
    launch=<Typography><strong>Successful Launch: </strong> <span style= {{color:'gray'}}>False</span></Typography>

  }
  if(props.successLand)
  {
    land=<Typography><strong>Successful Land: </strong> <span style= {{color:'gray'}}>True</span></Typography>
  }
  else{
    land=<Typography><strong>Successful Land: </strong> <span style= {{color:'gray'}}>False</span></Typography>

  }
  return(
    <Card className={classes.main}>
    <CardActionArea>
      <img style= {{backgroundColor:'#F2F3F4',padding:'5%',margin:'5%',marginLeft:'25px'}} src={props.url} className={classes.images} />
      <Typography><h3 style= {{color:'#2980B9'}}>{props.name} # {props.flightno}</h3></Typography>
      <Typography>   <span> Mission Id: {props.id}</span> </Typography>
      <Typography><strong>Launch Year: </strong><span style= {{color:'gray'}}>{props.launchyear}</span></Typography>
      {launch}
      {land}
    </CardActionArea>
    </Card>
  )
}

export default Cards;
