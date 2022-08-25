import React, { Component } from 'react'
import Student from '../student/Student'
import studentId from '../middle/Studentid'
import"../main/Main.css"
export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      studentid: [],
      student: [{ name: 'arun', class: 'fsd10', location: 'thoraipakkam' },
      { name: 'gopi', class: 'fsd10', location: 'thoraipakkam' },
      { name: 'arun kumar', class: 'fsd10', location: 'thoraipakkam' },
      { name: 'ijas', class: 'fsd10', location: 'thoraipakkam' },
      ]
    }
  }
  addvalue =(data) =>{
console.log('data',data)
  }
  render() {
    return (
      <div>
        {this.state.student.map((prod, index) => (
          <Student key={index} prod={prod}  addvalue={this.addvalue}/>
          // <div key ={index}>
          /* <h3>name:{prop.name}</h3>
          <h4>class:{prop.class}</h4>
          <h4>location:{prop.location}</h4>
          <button>add</button> */
          // </div>


        ))}
          <div className='props'>
        {this.state.studentid.map((prod,index) =>(
          <studentId key={index} prod={prod}/>
        // <div key ={index}>
/* <h3>name:{prop.name}</h3>
<h4>class:{prop.class}</h4>
<h4>location:{prop.location}</h4>
<button>add</button> */
        // </div>

        
        ))}
      
      </div>
      </div>

    )
  }
}


