import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';

class Professorpage extends Component { 
	
	constructor(props){
		super(props)
		this.state = {Professor: null}
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(event){
		this.setState({
			Professor: document.getElementById("Professorinput").value
		}, () => {
			fetch("https://www.eg.bucknell.edu/~amm042/service/q?Semester=Fall&Year=2018&text=%22" + this.state.Professor + "%22")
				.then(result=>result.json())
				.then(result=>{
					if (result.message.length !== 0) {
						document.getElementById("messagebox").innerHTML = ""
						for ( var i=0;i<result.message.length;i++){
							var res = result.message[i]
							console.log(res)
							document.getElementById("messagebox").innerHTML += 
							"<h4>Course Code: " + res.Course + "</h4>" +
							"<ul>" + 
							"<li>Course Title: " + res.Title + "</li>" +
							"<li>Instructor: " + res.Instructor + "</li>" +
							"<li>Meeting time: " + res["Meeting Time"] + "</li>" +
							"<li>Room: " + res.Room + "</li>" +
							"<li>Course CRN: " + res.CRN + "</li>" +
							"<li>Course Seats Left: " + res.SeatsAvail + "</li>" +
							"</ul>"
							
							for ( var k=0;k<res.Labs.length;k++){
								var lab = res.Labs[k]
								document.getElementById("messagebox").innerHTML += 
								"<h4>Course Code: " + lab.Course + "</h4>" +
								"<ul>" + 
								"<li>Course Title: " + lab.Title + "</li>" +
								"<li>Instructor: " + lab.Instructor + "</li>" +
								"<li>Meeting time: " + lab["Meeting Time"] + "</li>" +
								"<li>Room: " + lab.Room + "</li>" +
								"<li>Course CRN: " + lab.CRN + "</li>" +
								"<li>Course Seats Left: " + lab.SeatsAvail + "</li>" +
								"</ul>"
							}
							
							for ( var k=0;k<res.Problems.length;k++){
								var lab = res.Problems[k]
								document.getElementById("messagebox").innerHTML += 
								"<h4>Course Code: " + lab.Course + "</h4>" +
								"<ul>" + 
								"<li>Course Title: " + lab.Title + "</li>" +
								"<li>Instructor: " + lab.Instructor + "</li>" +
								"<li>Meeting time: " + lab["Meeting Time"] + "</li>" +
								"<li>Room: " + lab.Room + "</li>" +
								"<li>Course CRN: " + lab.CRN + "</li>" +
								"<li>Course Seats Left: " + lab.SeatsAvail + "</li>" +
								"</ul>"
							}
						}
					}
					else{
						document.getElementById("messagebox").innerHTML = "<p>Couldn't fetch this Professor.</p><p>Please enter a correct Professor.</p>"
					}
				})
				.catch(err=>{
					document.getElementById("messagebox").innerHTML = "<div>Couldn't fetch " + err + ".</div>" +
					"<div>Please enter a correct name in the following formats:</div>" +
					"<div>{Lastname}, {Firstname} or {Lastname, Firstname}</div>"
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
					<h1> Search by Professor </h1>
					<p> Please input the Professor:  
						<input className="marginleft20" id="Professorinput" type="text"/>
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
export default Professorpage