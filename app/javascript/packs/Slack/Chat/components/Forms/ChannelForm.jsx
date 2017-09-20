import React, { Component } from "react" 
import PropTypes from "prop-types"

export default class ChannelForm extends Component {
  handleSubmit(evt, { nameRef, typeRef, userIdsRef } = params) {
    const { onCreateChannel } = this.props
    evt.preventDefault()     

    let options = [].slice.call(userIdsRef.querySelectorAll('option'))
    let values = options.filter( (option) => { return option.selected } ).map( (option) => { return option.value })

    let newParams = { channel: {
      name: nameRef.value,
      type: typeRef.value,
      user_ids: values
    } }

    onCreateChannel(newParams)
  }

  renderUsers() {
    const { users } = this.props

    return users.map( (user) => {
      return (
        <option 
          value={ user.id }
          key={ user.id }>
          { user.username }
        </option>
      )
    })
  }

  render() {
    const { onCancelCreateChannel } = this.props
    let nameRef, typeRef, userIdsRef

    return (
      <div className="form-container">
        <form className="content" onSubmit={ (evt) => { this.handleSubmit(evt, { nameRef, typeRef, userIdsRef }) } } >
          <h1 className="header">Create a channel</h1>
          <div className="form-group">
            <label htmlFor="channel_name">
              Channel Name
            </label>
            <input 
              ref={ (el) => { nameRef = el } }
              type="text" 
              id="channel_name"/>
          </div>

          <div className="form-group">
            <label htmlFor="channel_type">
              Channel Type
            </label>
            <select
              ref={ (el) => { typeRef = el } }
              id="channel_type">
              <option value="PublicChannel"> Public Channel </option>
              <option value="PrivateChannel"> Private Channel </option>
              <option value="GroupChannel"> Group Channel </option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="user_ids">
              Users
            </label>
            <select
              ref={ (el) => { userIdsRef = el } }
              multiple="multple"
              name="user_ids[]"
              id="user_ids">
              { this.renderUsers() }
            </select>
          </div>

          <div className="action">
            <button
              className="btn -huge -transparent"
              type="button" 
              onClick={ () => { onCancelCreateChannel() } }>
              Cancel
            </button>
            <button 
              className="btn -huge"
              type="submit">
              Create Channel
            </button>
          </div>
        </form>
      </div>
    )
  }
}
