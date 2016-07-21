import React from 'react';

const ChatBar = React.createClass({
  getInitialState() {
    return {new_message: "",
            username: ""}
  },

  _handleInputChange(event) {
    this.setState({
      content: event.target.value,
      type: "chatMessage"
    })
  },

    _handleUserChange(event) {
    this.setState({
      username: event.target.value,
      type: "chatMessage"
    })
  },

  _submitEnter(event) {
    if (event.charCode == 13) {
      this.props._onNewMessage(this.state)
    }
  },

  render: function() {
    console.log("Rendering <ChatBar/>");
    return (
      <div>
        <footer>
          <input id="username"
                 type="text"
                 placeholder="Your name!"
                 value={this.state.username}
                 onChange={this._handleUserChange}
                 onKeyPress={this._submitEnter}
          />
          <input id="new-message"
                 type="text"
                 placeholder="Type a message and hit ENTER"
                 value={this.state.content}
                 onChange={this._handleInputChange}
                 onKeyPress={this._submitEnter}
          />
        </footer>
      </div>
    );
  }
});

export default ChatBar;