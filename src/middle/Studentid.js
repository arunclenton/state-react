import React, { Component } from 'react'

export default class Middle extends Component {
  render() {
    return (
      <div className='props'>
      <h3>name:{this.props.prod.name}</h3>
      <h4>class:{this.props.prod.class}</h4>
      <h4>location:{this.props.prod.location}</h4>
      <button onClick={this.addvalue}>add</button>
      </div>
    )
  }
}
