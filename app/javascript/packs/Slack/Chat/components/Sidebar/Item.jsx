import React, { Component } from "react"
import PropTypes from "prop-types"

export default class Item extends Component {
  render() {
    return (
      <li className="item">
        <div 
          onClick = { (activeChannel) => this.props.current(this.props.name) } >
          { this.props.name }
        </div>
      </li>
    )
  }
}
