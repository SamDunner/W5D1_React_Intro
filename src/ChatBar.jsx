import React from 'react';

const ChatBar = React.createClass({
  _handleInputChange(event) {
    console.log(event)
  },
  _submitNewMessage(event) {
    console.log(event.charCode == 13)
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
                 onChange={this._handleInputChange}
                 onKeyPress={this._submitNewMessage}
          />
        </footer>
      </div>
    );
  }
});

export default ChatBar;