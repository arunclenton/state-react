import React, { Component } from 'react'
import'../student/Student.css'
export default class Student extends Component {
  // constructor(){
  //   super()
  //   // this.addvalue =this.addvalue.bind(this)
  // }
  addvalue =() => {
    console.log('this',this)
    this.props.addvalue(this.props.prod);
  };
  render() {
    return (
   <div className='props'><div>
   <h3 className='h3'>name:{this.props.prod.name}</h3>
   <br></br>
   <h4>class:{this.props.prod.class}</h4>
   <br></br>
   <h4>location:{this.props.prod.location}</h4>
   <br></br>
  
   <button onClick={this.addvalue}>add</button>
</div></div>
    )
  }
}


