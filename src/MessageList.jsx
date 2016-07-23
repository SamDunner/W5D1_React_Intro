import React from 'react';
import Message from './Message.jsx';

const MessageList = React.createClass({
  render: function() {
    var messages = this.props.messages;
    return (
      <div id="message-list">
        {
          messages.map(function(message) {
            return (
              <Message data={message.content} key={message.id} postUser={message.username} />
            );
          })
        }
      </div>
    );
  }
});

export default MessageList;