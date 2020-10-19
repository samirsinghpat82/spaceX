import React from 'react';
import {  Button, Card, CardActions, Typography } from '@material-ui/core';
import classes from './SideCard.module.css';


const sideCard = (props) => {
  return(
    <Card className={classes.group}>
   
    <Typography align='center'>Successful Launch</Typography>
    <hr/>
    <CardActions>
    <Button variant="contained" color="primary" onClick={(e) => props.onLaunchSuccess()}>True</Button>
    <Button variant="contained" color="primary" onClick={(e) => props.onLaunchFail()}>False</Button>
    </CardActions>
    <Typography align='center'>Successful Land</Typography>
    <hr/>
    <CardActions>
    <Button variant="contained" color="primary" onClick={(e) => props.onLandSuccess()}>True</Button>
    <Button variant="contained" color="primary" onClick={(e) => props.onLandFail()}>False</Button>
    </CardActions>
      </Card>
  )
}



export default sideCard;
