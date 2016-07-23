import React from 'react';

const Message = React.createClass({
  render: function() {
    return (
      <div className="message">
        <span className="username">{this.props.postUser}</span>
        <span className="content">{this.props.data}</span>
      </div>
    );
  }
});

export default Message;