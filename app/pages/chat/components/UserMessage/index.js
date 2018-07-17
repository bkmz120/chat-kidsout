import React, {Component} from 'react';

import MessageTimeField from "Pages/chat/components/MessageTimeField";
import * as constants from "Constants/chat/chatArea";
import "./style.scss";

export default class UserMessage extends Component {
  render() {
    let isFirstClass="",isEndClass="";
    let time;
    if (this.props.isFirst) {
      isFirstClass = " chatUserMessage_first";
    }
    if (this.props.isEnd) {
      isEndClass = " chatUserMessage_end";
      time = <MessageTimeField value={this.props.message.time} />;
    }

    switch (this.props.message.type) {
      case constants.MESSAGE_TYPE_MY:
        return (
          <div className={"chatUserMessage chatUserMessage_my" + isFirstClass + isEndClass}>
            {time}
            <div className="chatUserMessage__text">
              {this.props.message.text}
            </div>
          </div>
        );
      case constants.MESSAGE_TYPE_COLLOCUTOR:
        return (
          <div className={"chatUserMessage chatUserMessage_collocutor" + isFirstClass + isEndClass}>
            <div className="chatUserMessage__text">
              {this.props.message.text}
            </div>
            {time}
          </div>
        );
    }
  }
}