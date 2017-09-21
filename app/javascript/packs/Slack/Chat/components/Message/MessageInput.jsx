import React, { Component } from "react"
import PropTypes from "prop-types"

export default class MessageInput extends Component {
  handleSubmit(evt, { msgRef } = params) {
    
    const { message, current } = this.props
    evt.preventDefault()

    let newParams = { message: {
      content: msgRef.value,
      receiveable_type: current.type,
      receiveable_id: current.id
    } }

    message(newParams)
  }  

  render () {
    let msgRef

    return (
      <form className="message-input" onSubmit= { (el) => { this.handleSubmit(el, { msgRef }) } }>
        <div className="form-group">
          <input 
            className="-large"
            ref ={ (msg) => { msgRef = msg} }
            placeholder="Input Message"
            type="text"/>
          <button className="btn -inherit" type="submit"> Submit </button>
        </div>
      </form> 
    )
  }
}