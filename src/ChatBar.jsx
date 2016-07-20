import React from 'react';

const ChatBar = React.createClass({
  getInitialState() {
    return {new_message: ""}
  },

  _handleInputChange(event) {
    this.setState({
     new_message: event.target.value
    })
  },

  _submitEnter(event) {
    if (event.charCode == 13) {
      this.props.onNewMessage(this.state.new_message)
    }

  },

  render: function() {
    console.log("Rendering <ChatBar/>");
    return (
      <div>
        <footer>
          <input id="username"
                 type="text"
                 placeholder={this.props.currentUser.name}
          />
          <input id="new-message"
                 type="text"
                 placeholder="Type a message and hit ENTER"
                 value={this.state.new_message}
                 onChange={this._handleInputChange}
                 onKeyPress={this._submitEnter}
          />
        </footer>
      </div>
    );
  }
});

export default ChatBar;