import React, { Component } from "react"
import PropTypes from "prop-types"

import Item from "./Item";

export default class List extends Component {
  renderUsers() {
    const { items, current } = this.props

    return items.map( (item) => {
      return (
        <Item
          key={ item.id }
          name={ item.username || item.name }
          current={ current }/>
      )
    })
  }

  render() {
    const { type, items, onClickCreateChannel } = this.props

    return (
      <div className="channels">
        { type }
        { onClickCreateChannel === undefined ? "" :  
          <button className="action" onClick={ () => { onClickCreateChannel() } } >
            +
          </button>
        }
        <ul className="list">
          { this.renderUsers() }
        </ul>
      </div>
    )
  }
}
