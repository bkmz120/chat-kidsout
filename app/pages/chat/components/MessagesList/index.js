import React, {Component} from 'react';

import UserMessage from 'Pages/chat/components/UserMessage';
import SystemMessage from 'Pages/chat/components/SystemMessage';
import * as constants from "Constants/chat/chatArea";
import "./style.scss";

export default class MessagesList extends Component {

  render() {
    let messagesList = [];

    for (let i=0;i<this.props.messages.length;i++) {
      let prevMessage,nextMessage;
      if (i>0) {
        prevMessage = this.props.messages[i-1];
      }
      if (i < this.props.messages.length-1) {
        nextMessage = this.props.messages[i+1];
      }

      let isFirst = true,isEnd = true;
      if (prevMessage!==undefined && prevMessage.type===this.props.messages[i].type) {
        isFirst = false;
      }
      if (nextMessage!==undefined && nextMessage.type===this.props.messages[i].type) {
        isEnd = false;
      }

      if (this.props.messages[i].type===constants.MESSAGE_TYPE_MY || this.props.messages[i].type===constants.MESSAGE_TYPE_COLLOCUTOR) {
        messagesList.push(
          <UserMessage
            key={i}
            message={this.props.messages[i]}
            isFirst={isFirst}
            isEnd={isEnd}
            collocutor={this.props.collocutor}
          />
        )
      }
      else if (this.props.messages[i].type===constants.MESSAGE_TYPE_SYSTEM) {
        messagesList.push(
          <SystemMessage
            key={i}
            message={this.props.messages[i]}
          />
        );
      }
    }

    return (
      <div className="chatMessagesList">
        {messagesList}
      </div>
    )
  }
}