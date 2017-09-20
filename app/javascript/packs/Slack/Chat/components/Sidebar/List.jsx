import React, { Component } from "react"
import PropTypes from "prop-types"

import Item from "./Item";

export default class List extends Component {
  renderUsers() {
    const { items } = this.props

    return items.map( (item) => {
      console.log(item.users)
      return (
        <Item
          key={ item.id }
          name={ item.username || item.name }/>
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
