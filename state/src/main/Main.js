import React, { Component } from 'react'
import Student from '../student/Student'
import Studentadd from '../middle/Studentadd'
import"../main/Main.css"
export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      studentid: [],
      student: [{ name: 'arun', class: 'fsd10', location: 'thoraipakkam',value:1,qyt:0 },
      { name: 'gopi', class: 'fsd10', location: 'thoraipakkam',value:1,qyt:0 },
      { name: 'arun kumar', class: 'fsd10', location: 'thoraipakkam',value:1,qyt:0 },
      { name: 'ijas', class: 'fsd10', location: 'thoraipakkam',value:1,qyt:0 },
      ]
    }
  }
  addvalue =(data) =>{
console.log('data',data)
 var a=this.state.studentid
 var b= a.includes(data)

 if(b=== false){
  data.qyt=+1
  this.setState({studentid:[...this.state.studentid,data.qyt]})
  this.setState({studentid:[...this.state.studentid,data]})

 }
 else{
  data.qyt+=1
  this.setState({studentid:[...this.state.studentid]})
 }
  }
  removevalue =(data) =>{
    console.log('data',data)
     var a=this.state.studentid
     var b= a.includes(data)
    
     if(b=== true){
      if((data.qyt)>0){
        var arun =a.indexOf(data)
        a.splice(arun,1);
        data.qyt=0
        this.setState({studentid:[...this.state.studentid]})
       
      }
     
    
    }
      }
  render() {
    return (
      <div>
        {this.state.student.map((prod, index) => (
          <Student key={index} prod={prod}  addvalue={this.addvalue}/>


        ))}
      
      
       <div>
        {this.state.studentid.map((prod, index) => (
          <Studentadd key={index} prod={prod}  removevalue={this.removevalue}/>
        ))}
          </div> 
      </div>

    )
  }
}


