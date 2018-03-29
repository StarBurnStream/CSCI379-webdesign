import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';

class Mainpage extends Component { 
	
	render(){
	  return (
	    <div>
			<div className="left20">
				<Navbar />
			</div>
			<div className="right80">
				<div>
					<h1> Main Page </h1>
					<p> This website provides the functionality for engineering students to 
						get access to required courses and their CRNs.</p>
					<p>	Also, it can be used for course searching.</p>
					<p>	More functionalities is to be added. To contribute, go to "Help". </p>
				</div>
			</div>
		</div>
	  )
	}
}
export default Mainpage