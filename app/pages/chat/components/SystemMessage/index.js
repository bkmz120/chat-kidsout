import React, {Component} from 'react';

import MessageTimeField from "Pages/chat/components/MessageTimeField";
import * as constants from "Constants/chat/chatArea";
import "./style.scss";

export default class SystemMessage extends Component {
  render() {
    let time = <MessageTimeField value={this.props.message.time} />;
    let statusClass="";
    if (this.props.message.status===constants.SYSTEM_MESSAGE_STATUS_SUCCESS) {
      statusClass=" chatSystemMessage_success";
    } else if (this.props.message.status===constants.SYSTEM_MESSAGE_STATUS_FAIL) {
      statusClass=" chatSystemMessage_fail";
    }
    return (
      <div className={"chatSystemMessage"+ statusClass}>
        <div className="chatSystemMessage__text">
          {this.props.message.text}
        </div>
        {time}
      </div>
    );
  }
}