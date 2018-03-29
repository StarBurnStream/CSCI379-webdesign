import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';

class Help extends Component { 
	
	render(){
	  return (
	    <container>
			<div className="left20">
				<Navbar />
			</div>
			<div className="right80">
				<div>
					<h1>Help Information</h1>
					<ul>
					<li>Author: Junjie Jiang</li>
					<li>Email: jj030@bucknell.edu</li>
					<li>Github: <a href="https://github.com/StarBurnStream/CSCI379-webdesign">https://github.com/StarBurnStream/CSCI379-webdesign</a></li>
					</ul>
				</div>
			</div>
		</container>
	  )
	}
}
export default Help