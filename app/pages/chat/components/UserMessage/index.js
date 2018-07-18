import React, {Component} from 'react';

import MessageTimeField from "Pages/chat/components/MessageTimeField";
import * as constants from "Constants/chat/chatArea";
import "./style.scss";

export default class UserMessage extends Component {
  render() {
    let isFirstClass="",isEndClass="";
    if (this.props.isFirst) {
      isFirstClass = " chatUserMessage_first";
    }
    if (this.props.isEnd) {
      isEndClass = " chatUserMessage_end";
    }

    switch (this.props.message.type) {
      case constants.MESSAGE_TYPE_MY:
        let myMessageStatus;
        let timeVisible = true;
        if (this.props.message.status===constants.MY_MESSAGE_STATUS_SENDING) {
          myMessageStatus = (
            <span className="chatUserMessage__myStatus chatUserMessage__myStatus_sending">
              Отправляется...
            </span>
          )
          timeVisible = false;
        }
        else if (this.props.message.status===constants.MY_MESSAGE_STATUS_FAIL) {
          myMessageStatus = (
            <div className="chatUserMessage__myStatus chatUserMessage__myStatus_fail">
              <span className="chatUserMessage__myStatus-ctrl">
                <i className="fa fa-repeat"></i>
              </span>
              <span className="chatUserMessage__myStatus-ctrl">
                <i className="fa fa-trash-o"></i>
              </span>
              Не отправлено
            </div>
          )
          timeVisible = false;
        }
        else if (this.props.message.status===constants.MY_MESSAGE_STATUS_SENDED) {
          myMessageStatus = (
            <i className="fa fa-check chatUserMessage__myStatus chatUserMessage__myStatus_sended"></i>
          )
        }
        else if (this.props.message.status===constants.MY_MESSAGE_STATUS_WASREAD) {
          myMessageStatus = (
            <span className="fa-stack chatUserMessage__myStatus chatUserMessage__myStatus_sended">
              <i className="fa fa-check fa-stack-1x" style={{marginLeft:"6px"}}></i>
              <i className="fa fa-check  fa-stack-1x"></i>
            </span>
          )
        }
        let time;
        if (timeVisible) {
          time = <MessageTimeField value={this.props.message.time} />
        }
        return (
          <div className={"chatUserMessage chatUserMessage_my" + isFirstClass + isEndClass}>
            {myMessageStatus}
            {time}
            <div className="chatUserMessage__text">
              {this.props.message.text}
            </div>
          </div>
        );
      case constants.MESSAGE_TYPE_COLLOCUTOR:
        let avatar;
        if (this.props.isEnd) {
          avatar = (
            <a href="#" className="chatUserMessage__user-link">
              <span
                className="chatUserMessage__user-img"
                style={{backgroundImage:"url(" + this.props.collocutor.avatar + ")"}}
              >
              </span>
            </a>
          );
        }
        return (
          <div className={"chatUserMessage chatUserMessage_collocutor" + isFirstClass + isEndClass}>
            {avatar}
            <div className="chatUserMessage__text">
              {this.props.message.text}
            </div>
            <MessageTimeField value={this.props.message.time} />
          </div>
        );
    }
  }
}