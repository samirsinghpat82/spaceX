import React,{Component} from 'react';
import Cards from './Components/Cards/Cards';
import Footer from './Components/Footer/Footer';
import SideCards from './Components/SideCard/SideCard';
import { Grid,Card } from '@material-ui/core';
import axios from 'axios';
import classes from './styles.module.css';


class App extends Component {
  state = {
    dataArr: [],
    isLaunchTrue: null,
    isLaunchFalse: true,
    isLandTrue: null,
    isLandFalse: true,
     
  }
  componentDidMount () {
      axios.get('https://api.spacexdata.com/v3/launches?limit=100')
      .then(response => {
        this.addHandler(response.data);
      })
  };

  componentDidUpdate () {
    if(this.state.isLaunchTrue){
    axios.get('https://api.spacexdata.com/v3/launches?limit=100&launch_success=true')
    .then(response => {
      this.addHandler(response.data);
    })
    this.setState({isLaunchTrue: false});
  }
    if(!this.state.isLaunchFalse){
      axios.get('https://api.spacexdata.com/v3/launches?limit=100&launch_success=false')
      .then(response => {
        this.addHandler(response.data);
      })
      this.setState({isLaunchFalse: true});
    }
    if(this.state.isLandTrue){
    axios.get('https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true')
    .then(response => {
      this.addHandler(response.data);
    })
    this.setState({isLandTrue: false});
  }
    if(!this.state.isLandFalse){
      axios.get('https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=false')
      .then(response => {
        this.addHandler(response.data);
      })
          this.setState({isLandFalse: true});
    }
  }

  addHandler = (data) => {
    this.setState({dataArr: data})
  }

  launchSuccess = () => {
    this.setState({isLaunchTrue: true});
  }

  launchFail = () => {
    this.setState({isLaunchFalse: false});
  }

  landSuccess = () => {
    this.setState({isLandTrue: true});
  }

  landFail = () => {
    this.setState({isLandFalse: false});
  }
  buttonClick = () => {
    this.setState({buttonClicked:true})
  }

  render(){

    return (
      <div style={{backgroundColor: '#F2F3F4',padding: '10px'}}>
        <h1>SpacEx Launch Programs</h1>
        {this.extra}
    <div className={classes.body}>
    <Grid item xs={12} sm={12} md={4} lg={3} >
    <SideCards
    onLaunchSuccess={this.launchSuccess}
    onLaunchFail={this.launchFail}
    onLandSuccess={this.landSuccess}
    onLandFail={this.landFail}
   
    /></Grid>
      
        <Grid className={classes.container} container alignItems="stretch" spacing={2} >
      {this.state.dataArr.map((index) => (
        <Grid item xs={12} sm={12} md={4} lg={3} >
       
        <Cards
        url={index.links.mission_patch_small}
        name={index.mission_name}
        flightno={index.flight_number}
        id={index.mission_id}
        launchyear={index.launch_year}
        successLaunch={index.launch_success}
        successLand={index.rocket.first_stage.cores[0].land_success}
         
        />
      </Grid>
    ))};
      </Grid>
    </div>
    <Footer />
    </div>
  );
}
}

export default App;
