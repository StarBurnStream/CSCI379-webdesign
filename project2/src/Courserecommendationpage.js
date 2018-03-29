import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import CourseList from './CourseList';

class Courserecommendationpage extends Component { 
	
	constructor(props){
		super(props)
		this.state = {major: null, term: null}
		this.handleChange = this.handleChange.bind(this);
		//this.handleClick = this.handleClick.bind(this);
	}
	
	handleChange(event){
		this.setState({
			major: document.getElementById("select1").value,
			term: document.getElementById("select2").value
		}, () => {console.log(this.state)})
	}
	
	handleClick = (event) => {
		console.log(CourseList)
		document.getElementById("messagebox").innerHTML = ""
		var selected = CourseList[this.state.major][this.state.term]
		for ( var i in selected ) {
			var dept = selected[i]["Department"]
			var number = selected[i]["Number"]
			fetch("https://www.eg.bucknell.edu/~amm042/service/q?Semester=Fall&Year=2018&Department=" + dept + "&CrseNum=" + number)
				.then(result=>result.json())
				.then(result=>{
					if (result.message.length !== 0) {
						console.log(result.message)
						for ( var j=0;j<result.message.length;j++){
							var res = result.message[j]
							document.getElementById("messagebox").innerHTML += 
							"<h4>Course Code: " + res.Course + "</h4>" +
							"<ul>" + 
							"<li>Course Title: " + res.Title + "</li>" +
							"<li>Instructor: " + res.Instructor + "</li>" +
							"<li>Meeting time: " + res["Meeting Time"] + "</li>" +
							"<li>Room: " + res.Room + "</li>" +
							"<li>Course CRN: " + res.CRN + "</li>" +
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
								"</ul>"
							}
						}
					}
				})
				.catch(err=>{
					document.getElementById("messagebox").innerHTML += "<div>Error occur: " + err + ".</div><div>Please enter a correct combinition.</div>"
				})
		}
	}
	
	render(){
	  return (
		<div>
			<div className="left20">
				<Navbar />
			</div>
			<div className="right80">
				<div className="inputbox">
					<h1> Course Recommendation </h1>
					<div className="row">
					  <div className="col">
						<label>
						  Pick your major:  
							<select id="select1" value={this.state.value} onChange={this.handleChange}>
								<option value="select">--select--</option>
								<option value="BMEG">Biomedical Engineering</option>
								<option value="CHEG">Chemical Engineering</option>
								<option value="CENG">Civil Engineering</option>
								<option value="CPEG">Computer Engineering</option>
								<option value="CSEG">Computer Science & Engineering</option>
								<option value="ELEG">Electrical Engineering</option>
								<option value="EVEG">Environmental Engineering</option>
								<option value="MECH">Mechanical Engineering</option>
							</select>
						</label>
					  </div>
					  
					  <div className="col">
						<label>
						  Pick your class year:  
							<select id="select2" value={this.state.value} onChange={this.handleChange}>
								<option value="select">--select--</option>
								<option value="1">First Year</option>
								<option value="2">Sophomore</option>
								<option value="3">Junior</option>
								<option value="4">Senior</option>
								
							</select>
						</label>
					  </div>
					  
					  <button className="marginleft20" id="confirm" onClick={this.handleClick}> Check </button>
					</div>
				</div>
				
				<div className="paddingleft20" id="messagebox">
				
				</div>
			</div>
		</div>
	  )
	}
}
export default Courserecommendationpage