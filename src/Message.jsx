import React from 'react';

const Message = React.createClass({
  render: function() {
    console.log("Rendering <Message/>");
    return (
        <div className="message">
          <span className="username">{this.props.data.username}</span>
          <span className="content">{this.props.data.content}</span>
        </div>
    );
  }
});

export default Message;