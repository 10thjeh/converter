import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import ReactDOM from 'react-dom';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme)=>({
  root : {
    flexGrow: 1
  }
}));
//FungsiSuhu
function cToK(number){
  return number*1+273;
}
function cToR(number){
  return number*4/5;
}
function cToF(number){
  return (number*9/4)+32;
}
function rToC(number){
  return number*5/4;
}
function rToK(number){
  return (number*5/4)+273;
}
function rToF(number){
  return (number*9/4)+32;
}
function fToC(number){
  return (number*1-32)*5/9;
}
function fToR(number){
  return (number*1-32)*4/9;
}
function fToK(number){
  return ((number*1-32)*5/9)+273;
}

class TemperatureBox extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      from: "C",
      to: "C",
      inputbox: 100,
      outputbox: 100
    }
  }

  handleChange = (e) =>{
    this.setState({outputbox: e.target.value,inputbox: e.target.value});
    console.log(this.state.inputbox);
    console.log(this.state.outputbox);
    if(this.state.from == "C" && this.state.to == "K"){
      this.setState({outputbox: cToK(this.state.inputbox)})
    }
    else if(this.state.from == "C" && this.state.to == "F"){
      this.setState({outputbox: cToF(this.state.inputbox)})
    }
    else if(this.state.from == "C" && this.state.to == "R"){
      this.setState({outputbox: cToR(this.state.inputbox)})
    }
    else if(this.state.from == "R" && this.state.to == "C"){
      this.setState({outputbox: rToC(this.state.inputbox)})
    }
    else if(this.state.from == "R" && this.state.to == "K"){
      this.setState({outputbox: rToK(this.state.inputbox)})
    }
    else if(this.state.from == "R" && this.state.to == "F"){
      this.setState({outputbox: rToF(this.state.inputbox)})
    }
    else if(this.state.from == "F" && this.state.to == "C"){
      this.setState({outputbox: fToC(this.state.inputbox)})
    }
    else if(this.state.from == "F" && this.state.to == "K"){
      this.setState({outputbox: fToK(this.state.inputbox)})
    }
    else if(this.state.from == "F" && this.state.to == "R"){
      this.setState({outputbox: fToR(this.state.inputbox)})
    }
  }
  handleChangeInputSelect = (e) =>{
    this.setState({from: e.target.value})
    console.log(this.state.from);
  }
  handleChangeOutputSelect = (e) =>{
    this.setState({to: e.target.value})
    console.log(this.state.to);
  }

  render(){
    return(
    <>
      <form noValidate autoComplete="off">
      <div style={{padding: '20px'}}>
      <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">Metric</InputLabel>
        <Select onChange={this.handleChangeInputSelect}>
          <MenuItem value="C">Celsius</MenuItem>
          <MenuItem value="F">Fahrenheit</MenuItem>
          <MenuItem value="R">Reamur</MenuItem>
          <MenuItem value="K">Kelvin</MenuItem>
        </Select>
      </FormControl>
      <TextField
          id="outlined-helperText"
          label="Input"
          onChange={this.handleChange}
          helperText="Input the value here"
          variant="outlined"
        />
      <TextField
          id="outlined-read-only-input"
          label="Answer"
          value={this.state.outputbox}
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
      <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">Metric</InputLabel>
        <Select onChange={this.handleChangeOutputSelect}>
          <MenuItem value="C" >Celsius</MenuItem>
          <MenuItem value="F" >Fahrenheit</MenuItem>
          <MenuItem value="R" >Reamur</MenuItem>
          <MenuItem value="K" >Kelvin</MenuItem>
        </Select>
      </FormControl>
      </div>
    </form>
    </>
    )
  }
}

class TemperatureButton extends React.Component{

  renderTempBox = () =>{
    ReactDOM.render(
      <TemperatureBox />,
      document.getElementById('count')
    )
  }

  render(){
    return (
      <Button variant="contained" color="primary" onClick={this.renderTempBox}>
        Temperature
      </Button>
    )
  };
};

//Logic for speed
function kmhToMeph(number){
  return number/1000;
}
function kmhToMph(number){
  return number*1.6;
}
function mephToKmh(number){
  return number*1000;
}
function mephToMph(number){
  return number*1609;
}
function mphToKmh(number){
  return number/1.6;
}
function mphToMeph(number){
  return number/1609;
}

//End of logic for speed

class SpeedBox extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      from: "kmh",
      to: "kmh",
      inputbox: 0,
      outputbox: 0
    }
  }

  handleChange = (e) =>{
    this.setState({outputbox: e.target.value,inputbox: e.target.value});
    console.log(this.state.inputbox);
    console.log(this.state.outputbox);
    if(this.state.from == "kmh" && this.state.to == "mph"){
      this.setState({outputbox: kmhToMph(this.state.inputbox)})
    }
    else if(this.state.from == "kmh" && this.state.to == "meph"){
      this.setState({outputbox: kmhToMeph(this.state.inputbox)})
    }
    else if(this.state.from == "mph" && this.state.to == "meph"){
      this.setState({outputbox: mphToMeph(this.state.inputbox)})
    }
    else if(this.state.from == "mph" && this.state.to == "kmh"){
      this.setState({outputbox: mphToKmh(this.state.inputbox)})
    }
    else if(this.state.from == "meph" && this.state.to == "kmh"){
      this.setState({outputbox: mephToKmh(this.state.inputbox)})
    }
    else if(this.state.from == "meph" && this.state.to == "mph"){
      this.setState({outputbox: mephToMph(this.state.inputbox)})
    }
  }

  handleChangeInputSelect = (e) =>{
    this.setState({from: e.target.value})
    console.log(this.state.from);
  }

  handleChangeOutputSelect = (e) =>{
    this.setState({to: e.target.value})
    console.log(this.state.to);
  }

  render(){
    return(
    <>
      <form noValidate autoComplete="off">
      <div style={{padding: '20px'}}>
      <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">Metric</InputLabel>
        <Select onChange={this.handleChangeInputSelect}>
          <MenuItem value="kmh">Kilometer per hour</MenuItem>
          <MenuItem value="meph">Meter per hour</MenuItem>
          <MenuItem value="mph">Mile per hour</MenuItem>
        </Select>
      </FormControl>
      <TextField
          id="outlined-helperText"
          label="Input"
          onChange={this.handleChange}
          helperText="Input the value here"
          variant="outlined"
        />
      <TextField
          id="outlined-read-only-input"
          label="Answer"
          value={this.state.outputbox}
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
      <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">Metric</InputLabel>
        <Select onChange={this.handleChangeOutputSelect}>
        <MenuItem value="kmh">Kilometer per hour</MenuItem>
        <MenuItem value="meph">Meter per hour</MenuItem>
        <MenuItem value="mph">Mile per hour</MenuItem>
        </Select>
      </FormControl>
      </div>
    </form>
    </>
    )
  }
}


class SpeedButton extends React.Component{

  renderSpeedBox = () =>{
    ReactDOM.render(
      <SpeedBox />,
      document.getElementById('count')
    )
  }

  render(){
    return (
      <Button variant="contained" color="primary" onClick={this.renderSpeedBox}>
        Speed
      </Button>
    )
  };
};

//Start Weight Logic
function kgToKw(number){
  return number*100;
}
function kgToTon(number){
  return number*1000;
}
function kwToKg(number){
  return number*0.01;
}
function kwToTon(number){
  return number/10;
}
function tonToKg(number){
  return number*1000;
}
function tonToKw(number){
  return number*10;
}


//End of Weight Logic

class WeightBox extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      from: "kg",
      to: "kg",
      inputbox: 0,
      outputbox: 0
    }
  }

  handleChange = (e) =>{
    this.setState({outputbox: e.target.value,inputbox: e.target.value});
    console.log(this.state.inputbox);
    console.log(this.state.outputbox);
    if(this.state.from == "kg" && this.state.to == "kw"){
      this.setState({outputbox: kgToKw(this.state.inputbox)});
    }
    else if(this.state.from == "kg" && this.state.to == "ton"){
      this.setState({outputbox: kgToTon(this.state.inputbox)});
    }
    else if(this.state.from == "kw" && this.state.to == "kg"){
      this.setState({outputbox: kwToKg(this.state.inputbox)});
    }
    else if(this.state.from == "kw" && this.state.to == "ton"){
      this.setState({outputbox: kwToTon(this.state.inputbox)});
    }
    else if(this.state.from == "ton" && this.state.to == "kg"){
      this.setState({outputbox: tonToKg(this.state.inputbox)});
    }
    else if(this.state.from == "ton" && this.state.to == "kw"){
      this.setState({outputbox: tonToKw(this.state.inputbox)});
    }
  }

  handleChangeInputSelect = (e) =>{
    this.setState({from: e.target.value})
    console.log(this.state.from);
  }

  handleChangeOutputSelect = (e) =>{
    this.setState({to: e.target.value})
    console.log(this.state.to);
  }

  render(){
    return(
    <>
      <form noValidate autoComplete="off">
      <div style={{padding: '20px'}}>
      <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">Metric</InputLabel>
        <Select onChange={this.handleChangeInputSelect}>
        <MenuItem value="kg">Kilogram</MenuItem>
        <MenuItem value="kw">Kwintal</MenuItem>
        <MenuItem value="ton">Ton</MenuItem>
        </Select>
      </FormControl>
      <TextField
          id="outlined-helperText"
          label="Input"
          onChange={this.handleChange}
          helperText="Input the value here"
          variant="outlined"
        />
      <TextField
          id="outlined-read-only-input"
          label="Answer"
          value={this.state.outputbox}
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
      <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">Metric</InputLabel>
        <Select onChange={this.handleChangeOutputSelect}>
        <MenuItem value="kg">Kilogram</MenuItem>
        <MenuItem value="kw">Kwintal</MenuItem>
        <MenuItem value="ton">Ton</MenuItem>
        </Select>
      </FormControl>
      </div>
    </form>
    </>
    )
  }
}

class WeightButton extends React.Component{
  renderWeightBox = () =>{
    ReactDOM.render(
      <WeightBox />,
      document.getElementById('count')
    )
  }
  render(){
    return (
      <Button variant="contained" color="primary" onClick={this.renderWeightBox}>
        Weight
      </Button>
    )
  };
};

//Time logic starts
function stom(number){
  return number/60;
}
function stoh(number){
  return number/3600;
}
function mtos(number){
  return number*60;
}
function mtoh(number){
  return number/60;
}
function htos(number){
  return number*3600;
}
function htom(number){
  return number*60;
}
//Time logic ends
class TimeBox extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      from: "s",
      to: "s",
      inputbox: 0,
      outputbox: 0
    }
  }

  handleChange = (e) =>{
    this.setState({outputbox: e.target.value,inputbox: e.target.value});
    console.log(this.state.inputbox);
    console.log(this.state.outputbox);
    if(this.state.from == "s" && this.state.to == "m"){
      this.setState({outputbox: stom(this.state.inputbox)})
    }
    else if(this.state.from == "s" && this.state.to == "h"){
      this.setState({outputbox: stoh(this.state.inputbox)})
    }
    else if(this.state.from == "m" && this.state.to == "s"){
      this.setState({outputbox: mtos(this.state.inputbox)})
    }
    else if(this.state.from == "m" && this.state.to == "h"){
      this.setState({outputbox: mtoh(this.state.inputbox)})
    }
    else if(this.state.from == "h" && this.state.to == "s"){
      this.setState({outputbox: htos(this.state.inputbox)})
    }
    else if(this.state.from == "h" && this.state.to == "m"){
      this.setState({outputbox: htom(this.state.inputbox)})
    }
  }

  handleChangeInputSelect = (e) =>{
    this.setState({from: e.target.value})
    console.log(this.state.from);
  }

  handleChangeOutputSelect = (e) =>{
    this.setState({to: e.target.value})
    console.log(this.state.to);
  }

  render(){
    return(
    <>
      <form noValidate autoComplete="off">
      <div style={{padding: '20px'}}>
      <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">Metric</InputLabel>
        <Select onChange={this.handleChangeInputSelect}>
        <MenuItem value="s">Second</MenuItem>
        <MenuItem value="m">Minute</MenuItem>
        <MenuItem value="h">Hours</MenuItem>
        </Select>
      </FormControl>
      <TextField
          id="outlined-helperText"
          label="Input"
          onChange={this.handleChange}
          helperText="Input the value here"
          variant="outlined"
        />
      <TextField
          id="outlined-read-only-input"
          label="Answer"
          value={this.state.outputbox}
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
      <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">Metric</InputLabel>
        <Select onChange={this.handleChangeOutputSelect}>
        <MenuItem value="s">Second</MenuItem>
        <MenuItem value="m">Minute</MenuItem>
        <MenuItem value="h">Hours</MenuItem>
        </Select>
      </FormControl>
      </div>
    </form>
    </>
    )
  }
}

class TimeButton extends React.Component{
  renderTimeBox = () =>{
    ReactDOM.render(
      <TimeBox />,
      document.getElementById('count')
    )
  }
  render(){
    return (
      <Button variant="contained" color="primary" onClick={this.renderTimeBox}>
        Time
      </Button>
    )
  };
};

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} alignItems="center">
        <Grid item md={3} alignItems="center">
          <TemperatureButton />
        </Grid>
        <Grid item md={3} alignItems="center">
          <SpeedButton />
        </Grid>
        <Grid item md={3} alignItems="center">
          <WeightButton />
        </Grid>
        <Grid item md={3} alignItems="center">
          <TimeButton />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
