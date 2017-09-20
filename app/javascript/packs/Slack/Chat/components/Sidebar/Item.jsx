import React, { Component } from "react"
import PropTypes from "prop-types"

export default class Item extends Component {
  render() {
    return (
      <li className="item">
        { this.props.name }
      </li>
    )
  }
}
