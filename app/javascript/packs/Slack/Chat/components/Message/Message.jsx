import React, { Component } from "react"
import PropTypes from "prop-types"

export default class Message extends Component {
  renderMessages() {
    const { messages } = this.props

    return messages.map( (message) => {
      return (
        <p
          className="item" 
          key={message.id}>
          <div className="name">Anonymouse</div>
          {message.content}
        </p>
        )
    })
  }
  render() {
    
    return (
      <div className="message">
        {this.renderMessages()}
      </div>
      )
  }
}