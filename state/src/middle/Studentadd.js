import React, { Component } from 'react'
import './Studentadd.css'
export default class Studentadd extends Component {
    removevalue =() => {
        
        this.props.removevalue(this.props.prod);
      };
    render() {
        return (
            <div  className='arun'>
                <div >
   <h3 className='h3'>name:{this.props.prod.name}</h3>
   <br></br>
   <h4>class:{this.props.prod.class}</h4>
   <br></br>
   <h4>location:{this.props.prod.location}</h4>
   <br></br>
   <h4>qyt:{this.props.prod.qyt}</h4>
   <button onClick={this.removevalue}>remove</button>
</div>
            </div>
        )
    }
}
