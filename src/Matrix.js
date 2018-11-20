import React, { Component } from 'react';
import { pattern1 } from './data.js';
import Cell from './Cell.js';

export default class Matrix extends Component {


  genRow = (vals) => (
    vals.map((val, index) => {
      console.log(index)
      return(<Cell value={val} key={index} />)}) // replace me and render a cell component instead!
  )

  genMatrix = () => (
    this.props.values.map((rowVals, index) => <div key={index} className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }

}

const row = Array(10).fill('#f00')
const columns = Array(10).fill(row)
Matrix.defaultProps = {
  values: columns
}
