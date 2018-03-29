import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';

class Namepage extends Component { 
	
	constructor(props){
		super(props)
		this.state = {Dept: null, Number:null}
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(event){
		this.setState({
			Dept: document.getElementById("Deptinput").value,
			Number: document.getElementById("Numberinput").value
		}, () => {
			var url = "https://www.eg.bucknell.edu/~amm042/service/q?Semester=Fall&Year=2018&Department=" + this.state.Dept + "&CrseNum=" + this.state.Number
			fetch(url)
				.then(result=>result.json())
				.then(result=>{
					if (result.message.length !== 0) {
						document.getElementById("messagebox").innerHTML = ""
						for ( var i=0;i<result.message.length;i++){
							var res = result.message[i]
							document.getElementById("messagebox").innerHTML += 
							"<h4>Course Code: " + res.Course + "</h4>" +
							"<ul>" + 
							"<li>Course Title: " + res.Title + "</li>" +
							"<li>Instructor: " + res.Instructor + "</li>" +
							"<li>Meeting time: " + res["Meeting Time"] + "</li>" +
							"<li>Room: " + res.Room + "</li>" +
							"<li>Course CRN: " + res.CRN + "</li>" +
							"</ul>"
						}
					}
					else{
						document.getElementById("messagebox").innerHTML = "<p>Couldn't fetch this Combinition.</p><p>Please enter a correct combinition.</p>"
					}
				})
				.catch(err=>{
					document.getElementById("messagebox").innerHTML = "<div>Couldn't fetch " + err + ".</div><div>Please enter a correct combinition.</div>"
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
					<h1> Search by Name </h1>
					<p> Department:  
						<input className="marginleftright20" id="Deptinput" type="text"/>
						Number:  
						<input className="marginleft20" id="Numberinput" type="text"/>
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
export default Namepage