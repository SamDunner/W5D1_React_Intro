import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

const socket = new WebSocket("ws://localhost:4000");

const App = React.createClass({

  getInitialState: function() {
    var data = {
      currentUser: {username: "Anonymous"},
      messages: [],
      totalUsers: 0
    };
    return data;
  },

  componentDidMount: function() {

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      switch (message.type) {
        case "outgoingMessage":
          this.state.messages.push(message);
          this.setState(this.state);
          break;
        case "outgoingUser":
          alert(message.content);
          break;
        case "clientsOnline":
          this.state.totalUsers = message.content;
          this.setState(this.state);
          break;
        default:
          console.log("unknown action");
          break;
      }
    }
  },

  _onNewMessage: function(msg) {
      switch(msg.type){
        case "chatUser":
          this.state.currentUser.username = msg.currentUser;
          this.setState(this.state);
          socket.send(JSON.stringify(msg));
          break;
        case "chatMessage":
          socket.send(JSON.stringify(msg));
          break;
        default:
          break;
      }
  },

  _onUsernameChange: function(name) {
          this.state.currentUser.username = name;
          this.setState(this.state);
  },

  render: function() {
    return (
      <div className="wrapper">
        <nav>
          <h1>Chatty</h1>
          <h4>Current Users: {this.state.totalUsers}</h4>
        </nav>
          <MessageList messages={this.state.messages}
          />
          <ChatBar _onNewMessage={this._onNewMessage}
                   currentUser={this.state.currentUser}
                   _onUsernameChange={this._onUsernameChange}
          />
      </div>
    );
  }
});

export default App;