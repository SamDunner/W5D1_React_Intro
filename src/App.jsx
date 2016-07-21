import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

// var data = {
//   currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
//   messages: [
//     {
//       username: "Bob",
//       content: "Has anyone seen my marbles?",
//       id: 1
//     },
//     {
//       username: "Anonymous",
//       content: "No, I think you lost them. You lost your marbles Bob. You lost them for good.",
//       id: 2
//     }
//   ]
// };

const socket = new WebSocket("ws://localhost:4000");

const App = React.createClass({
  getInitialState: function() {
    var data = {
      currentUser: [],
      messages: [] // messages coming from the server will be stored here as they arrive
    };
    return data;
  },

  // getInitialState: function() {
  //   return data;
  // },

  componentDidMount: function() {
    console.log("componentDidMount <App />");

    socket.onopen = function() {
      const testMessage = JSON.stringify({type: "test", message: "server receives stuff"});
      socket.send(testMessage);
    };

    socket.onmessage = (event) => {
      console.log("Received message: ", event.data);
      this.state.messages.push(JSON.parse(event.data));
      this.setState(this.state)
    };

  //   setTimeout(() => {
  //     console.log("Simulating incoming message");
  //     // Add a new message to the list of messages in the data store
  //     this.state.messages.push({id: 3, username: "Michelle", content: "Hello there!"});
  //     // Update the state of the app component. This will call render()
  //     this.setState(this.state)
  //   }, 3000);
  },

  _onNewMessage: function(msg) {
    //this.state.data.messages.push({username: msg.currentUser, content: msg.new_message});
    // Update the state of the app component. This will call render()
    // this.setState({data: this.state.data});
    // console.log(msg);
    socket.send(JSON.stringify(msg))
  },



  render: function() {
    console.log("Rendering <App/>");
    return (
      <div className="wrapper">
        <nav>
          <h1>Chatty</h1>
        </nav>
          <MessageList messages={this.state.messages} />
          <ChatBar currentUser={this.state.currentUser} _onNewMessage={this._onNewMessage} />
      </div>
    );
  }
});

export default App;