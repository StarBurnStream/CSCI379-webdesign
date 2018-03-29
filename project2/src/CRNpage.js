import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';

class CRNpage extends Component { 
	
	constructor(props){
		super(props)
		this.state = {CRN: null}
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(event){
		this.setState({
			CRN: document.getElementById("CRNinput").value
		}, () => {
			fetch("https://www.eg.bucknell.edu/~amm042/service/q?Semester=Fall&Year=2018&CRN=" + this.state.CRN)
				.then(result=>result.json())
				.then(result=>{
					if (result.message.length === 1) {
						result = result.message[0]
						document.getElementById("messagebox").innerHTML = 
						"<h4>Course Code: " + result.Course + "</h4>" +
						"<ul>" + 
						"<li>Course Title: " + result.Title + "</li>" +
						"<li>Instructor: " + result.Instructor + "</li>" +
						"<li>Meeting time: " + result["Meeting Time"] + "</li>" +
						"<li>Room: " + result.Room + "</li>" +
						"<li>Course CRN: " + result.CRN + "</li>" +
						"</ul>"
					}
					else{
						document.getElementById("messagebox").innerHTML = "<p>Couldn't fetch this CRN.</p><p>Please enter a correct CRN.</p>"
					}
				})
				.catch(err=>{
					document.getElementById("messagebox").innerHTML = "<div>Couldn't fetch " + err + ".</div><div>Please enter a correct CRN.</div>"
				})
		});

	}
	
	render(){
	  return (
	    <div>
			<div className="left20">
				<Navbar />
			</div>
			<div className="right80">
				<div className="inputbox">
					<h1> Search by CRN </h1>
					<p> Please input the CRN:  
						<input className="marginleft20" id="CRNinput" type="text"/>
						<button className="marginleft20" id="confirm" onClick={this.handleClick}> Search </button>
					</p>
				</div>
				<div>
					<div className="paddingleft20" id="messagebox"> </div>
				</div>
			</div>
		</div>
	  )
	}
}
export default CRNpage