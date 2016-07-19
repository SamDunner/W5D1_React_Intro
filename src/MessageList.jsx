import React from 'react';
import Message from './Message.jsx';

const MessageList = React.createClass({
  render: function() {
    console.log("Rendering <MessageList/>");
    var messages = this.props.messages;
    return (
      <div id="message-list">
        {messages.map(function(m) {
          return (<Message data={m} key={m.id} />)
        } )
        }
      </div>
    );
  }
});

export default MessageList;