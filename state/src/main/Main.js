import React, { Component } from 'react'
import Student from '../student/Student'
import Studentadd from '../middle/Studentadd'
import "../main/Main.css"
export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      studentid: [],
      student: [{ name: 'arun', class: 'fsd10', location: 'thoraipakkam', value: 1, qyt: 0 },
      { name: 'gopi', class: 'fsd10', location: 'thoraipakkam', value: 1, qyt: 0 },
      { name: 'arun kumar', class: 'fsd10', location: 'thoraipakkam', value: 1, qyt: 0 },
      { name: 'ijas', class: 'fsd10', location: 'thoraipakkam', value: 1, qyt: 0 },
      ]
    }
  }
  addvalue = (data) => {
    console.log('data', data)
    var a = this.state.studentid
    var b = a.includes(data)

    if (b === false) {
      data.qyt = +1
      this.setState({ studentid: [...this.state.studentid, data.qyt] })
      this.setState({ studentid: [...this.state.studentid, data] })

    }
    else {
      data.qyt += 1
      this.setState({ studentid: [...this.state.studentid] })
    }
  }
  removevalue = (data) => {
    console.log('data', data)
    var a = this.state.studentid
    //  console.log(a);
    var b = a.includes(data)
    // console.log(b);
    if (b === true) {
      if ((data.qyt) > 0) {
        var arun = a.indexOf(data)
        a.splice(arun, 1);
        a.slice(arun, 1);
        data.qyt = 0
        this.setState({ studentid: [...this.state.studentid] })

      }


    }
  }
  incresevalue= (data) => {
    
     data.qyt = data.qyt + 1
      this.setState({ studentid: [...this.state.studentid] })
  
  }

  reducevalue =(data) =>{
    if((data.qyt)> 1){
      data.qyt =data.qyt -1
      this.setState({studentid: [...this.state.studentid]})

    }
    else{
      let a=this.state.studentid
      let b=a.includes(data)
      if(b===true){

        let arun=a.indexOf(data)
        a.splice(arun,1);
        data.qyt=0;
        this.setState({studentid: [...this.state.studentid]})
      }
    }
  }
  render() {
    return (
      <div className='class'>
        <div className='button1'>
          {this.state.student.map((prod, index) => (
            <Student key={index} prod={prod} addvalue={this.addvalue} />


          ))}
        </div>

        <div className='class1'>
          {this.state.studentid.map((prod, index) => (
            <Studentadd key={index} prod={prod} removevalue={this.removevalue} 
            reducevalue={this.reducevalue} 
            incresevalue ={this.incresevalue}  />
          ))}
        </div>

        


      </div>

    )
  }
}


