import React from 'react';

const ChatBar = React.createClass({
  _handleInputChange(event) {
    console.log(event)
  },

  render: function() {
    console.log("Rendering <ChatBar/>");
    return (
      <div>
        <footer>
          <input id="username"
                 type="text"
                 value={this.props.currentUser.name}
                 onChange={this._handleInputChange}
          />
          <input id="new-message"
                 type="text"
                 placeholder="Type a message and hit ENTER"
          />
        </footer>
      </div>
    );
  }
});

export default ChatBar;