import React, { Component } from 'react';
import Cell from './Cell.js'

export default class Matrix extends Component {

  genRow = (vals) => (
    vals.map(val => <Cell value={val}/>) // replace me and render a cell component instead!
  )

  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }

}

function createArray(x,y){
  let array = []
  for(let i = 0; i < x; i++){
    array.push([])
    for(let j = 0; j < y; j++){
      array[i].push('#F00')
    }
  }
  return array
}

Matrix.defaultProps = {
  values: createArray(10,10)
}
