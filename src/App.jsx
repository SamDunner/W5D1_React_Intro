import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

const socket = new WebSocket("ws://localhost:4000");

const App = React.createClass({
  getInitialState: function() {
    var data = {
      currentUser: {username: "Anonymous"},
      messages: [] // messages coming from the server will be stored here as they arrive
    };
    return data;
  },

  // _onSocketNewUser(data){
  //   if(data.currentUser != this.state.currentUser){
  //     this.setState({
  //       users: [...this.state.users, data.content]
  //     });
  //   }
  // },

  _onSocketNewMessage(data){

  },

  componentDidMount: function() {
    // console.log("componentDidMount <App />");

    socket.onopen = () => {
        const event_data = JSON.stringify({
          type: "new_user",
          content: this.state.currentUser
        });
      socket.send(event_data);
      // const testMessage = JSON.stringify({type: "test", message: "server receives stuff"});
      // socket.send(testMessage);
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      switch (message.type) {
        case "outgoingMessage":
          this.state.data.messages.push(message);
          this.setState(this.state);
          break;
        case "outgoingUser":
          alert(message.content);
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

    //this.state.data.messages.push({username: msg.currentUser, content: msg.new_message});
    // Update the state of the app component. This will call render()
    // this.setState({data: this.state.data});
    // console.log(msg);
    // socket.send(JSON.stringify(msg))
  },


  render: function() {
    console.log("Rendering <App/>");
    return (
      <div className="wrapper">
        <nav>
          <h1>Chatty</h1>
        </nav>
          <MessageList messages={this.state.messages}
          />
          <ChatBar _onNewMessage={this._onNewMessage}
                   currentUser={this.state.currentUser}
          />
      </div>
    );
  }
});

export default App;