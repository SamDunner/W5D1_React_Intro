import React from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

var data = {
  currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
  messages: [
    {
      username: "Bob",
      content: "Has anyone seen my marbles?",
      id: 1
    },
    {
      username: "Anonymous",
      content: "No, I think you lost them. You lost your marbles Bob. You lost them for good.",
      id: 2
    }
  ]
};

const App = React.createClass({
  getInitialState: function() {
    return data;
  },

  componentDidMount: function() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      this.state.messages.push({id: 3, username: "Michelle", content: "Hello there!"});
      // Update the state of the app component. This will call render()
      this.setState(this.state)
    }, 3000);
  },

  _onNewMessage(msg) {
    this.state.messages.push({id: 4, username: "Michelle", content: msg});
      // Update the state of the app component. This will call render()
      this.setState(this.state)
  },

  render: function() {
    console.log("Rendering <App/>");
    return (
      <div className="wrapper">
        <nav>
          <h1>Chatty</h1>
        </nav>
          <MessageList messages={this.state.messages} />
          <ChatBar currentUser={this.state.currentUser} onNewMessage={this._onNewMessage} />
      </div>
    );
  }
});

export default App;





