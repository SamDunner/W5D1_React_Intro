import React from 'react';

const ChatBar = React.createClass({
  getInitialState() {
    return {content: "",
            username: ""}
  },

  _handleInputChange(event) {
    this.setState({
      content: event.target.value,
    });
  },

  _handleUserChange(event) {
    this.setState({
      username: event.target.value,
    });
  },

  _submitEnterText(event) {
    if (event.charCode == 13) {
      this.props._onNewMessage({
        type: "chatMessage",
        content: this.state.content,
        username: this.state.username
      });
    }
  },

  _submitEnterUser(event) {
    if (event.charCode == 13) {
      this.props._onNewMessage({
        type: "chatUser",
        content: `${this.props.currentUser.username} changed their name to ${this.state.username}`
      });
    }
  },

  render: function() {
    return (
      <div>
        <footer>
          <input id="username"
                 type="text"
                 placeholder="Your name!"
                 value={this.state.username}
                 onChange={this._handleUserChange}
                 onKeyPress={this._submitEnterUser}
          />
          <input id="new-message"
                 type="text"
                 placeholder="Type a message and hit ENTER"
                 value={this.state.content}
                 onChange={this._handleInputChange}
                 onKeyPress={this._submitEnterText}
          />
        </footer>
      </div>
    );
  }
});

export default ChatBar;