import React, { Component } from "react"
import PropTypes from "prop-types"
import List from "../components/Sidebar/List"
import Message from "../components/Message/Message"
import MessageInput from "../components/Message/MessageInput"
import ChannelForm from "../components/Forms/ChannelForm"
 
import UsersAPI from "../services/UsersAPI"
import ChannelsAPI from "../services/ChannelsAPI"

export default class ChatContainer extends Component {
  constructor() {
    super()
    this.state = { users: [], channels: [] }
  }

  componentWillMount() {
    UsersAPI.fetchAll({
      onSuccess: (response) => {
        this.setState({users: response.data})
      }
    })

    ChannelsAPI.fetchAll({
      onSuccess: (response) => {
        this.setState({ channels: response.data } )
      }
    })
  }

  createChannel(params, ref1, ref2) {
    const { channels } = this.state

    ChannelsAPI.create({
      data: params,
      onSuccess: (response) => {
        this.setState({ channels: channels.concat(response.data) })
        this.toggleChannelForm(ref1, ref2)
      }
    })
  }

  toggleChannelForm(ref1, ref2) {
    if (ref1.hasAttribute('hidden')) {
      ref1.removeAttribute('hidden')
      ref2.setAttribute('hidden', 'hidden')
    } else {
      ref2.removeAttribute('hidden')
      ref1.setAttribute('hidden', 'hidden')
    }
  }

  render() {
    const { users, channels } = this.state
    const publicChannels = channels.filter( (member) => { return member.type === "PublicChannel" } )
    const privateChannels = channels.filter( (member) => { return member.type === "PrivateChannel" } )
    const groupChannels = channels.filter( (member) => { return member.type === "GroupChannel" } )

    let formRef, contentRef

    return (
      <div>
        <div 
          ref={ (el) => { formRef = el } }
          role="channel-form"
          hidden>
          <ChannelForm
            users={ users }
            onCreateChannel={ (value) => { this.createChannel(value, formRef, contentRef) } }
            onCancelCreateChannel={ () => { this.toggleChannelForm(formRef, contentRef) } }/>
        </div>
        <div 
          ref={ (el) => { contentRef = el } }
          role="main-content"
          className="main-container">
          <aside>
            <div className="channel-container">
              <List 
                onClickCreateChannel={ () => { this.toggleChannelForm(formRef, contentRef) } }
                icon={ "hashtags" }
                type={ "Public Channels" }
                items={ publicChannels }/>
              <List 
                onClickCreateChannel={ () => { this.toggleChannelForm(formRef, contentRef) } }
                icon={ "lock" }
                type={ "Private Channels" }
                items={ privateChannels }/>
              <List 
                type={ "Direct Messages" }
                className="direct-message"
                icon={ "bullet" }
                items={ users }/>
            </div>
          </aside>
          <article>
          </article>
        </div>
      </div>
    )
  }
}
