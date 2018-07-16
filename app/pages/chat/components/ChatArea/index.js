import React, {Component} from 'react';
import CollocutorBar from "Pages/chat/components/CollocutorBar";
import "./style.scss";

export default class ChatArea extends Component {
  render() {
    return (
      <div className="chatArea">
        <div className="chatArea__collocutorBar">
          <CollocutorBar />
        </div>
        <div className="chatArea__messagesList">
        </div>
        <div className="chatArea__newMessage">
        </div>
      </div>
    )
  }
}