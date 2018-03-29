import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';

class Coursepage extends Component { 
	
	render(){
	  return (
	    <container>
			<div className="left20">
				<Navbar />
			</div>
			<div className="right80">
				<div>
					<h1> Search Courses </h1>
					<p> This page provides the functionality for all students to 
						get access to information about courses. </p>
					<p>	Courses can be searched by CRN, course name or professor. </p>
					<p>	Currently only 2018 Fall is supported. </p>
					<p>	More functionalities is to be added. To contribute, go to "Help". </p>
				</div>
			</div>
		</container>
	  )
	}
}
export default Coursepage