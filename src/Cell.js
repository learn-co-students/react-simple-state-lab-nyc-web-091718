import React, { Component } from 'react';

export default class Cell extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      color: props.value
    }
  }

change = () => {
  this.setState({
    color: this.state.color = '#333'
  })
      // console.log({this.state.color})
}


render(){
  return (
    <div className="cell" onClick={this.change} style={{backgroundColor: this.state.color}}>
      {/* <div className="cell" style={{backgroundColor: {this.state.color}}}> */}
     </div>
   // </div>
  )

}


} //end class
