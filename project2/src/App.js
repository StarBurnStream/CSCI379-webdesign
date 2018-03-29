import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Professorpage from './Professorpage';
import Namepage from './Namepage';
import CRNpage from './CRNpage';
import Coursepage from './Coursepage';
import Mainpage from './Mainpage';
import Courserecommendationpage from './Courserecommendationpage';
import Help from './Help';

class App extends Component {
  render() {
    return (

	  <div>
	  <Route exact path='/' render = {() => (
	  <MuiThemeProvider>
		<Mainpage />
	  </MuiThemeProvider>
	  )}/>
	  <Route path='/help' render = {() => (
	  <MuiThemeProvider>
		<Help />
	  </MuiThemeProvider>
	  )}/>
	  <Route path='/searchcourse' render = {() => (
	  <MuiThemeProvider>
		<Coursepage />
	  </MuiThemeProvider>
	  )}/>
	  <Route path='/searchbycrn' render = {() => (
	  <MuiThemeProvider>
		<CRNpage />
	  </MuiThemeProvider>
	  )}/>
	  <Route path='/searchbyname' render = {() => (
	  <MuiThemeProvider>
		<Namepage />
	  </MuiThemeProvider>
	  )}/>
	  <Route path='/searchbyprofessor' render = {() => (
	  <MuiThemeProvider>
		<Professorpage />
	  </MuiThemeProvider>
	  )}/>
	  <Route path='/courserecommendation' render = {() => (
	  <MuiThemeProvider>
		<Courserecommendationpage />
	  </MuiThemeProvider>
	  )}/>
	  </div>
    );
  }
}

export default App;
