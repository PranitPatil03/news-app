import React, { Component } from 'react'
import loading from './Search.gif'

// eslint-disable-next-line import/no-anonymous-default-export
export class Spinner extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <img src={loading} alt="loading"/>
      </div>
    )
  }
}

export default Spinner
