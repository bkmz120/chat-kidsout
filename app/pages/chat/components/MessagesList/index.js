import React, {Component} from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import UserMessage from 'Pages/chat/components/UserMessage';
import SystemMessage from 'Pages/chat/components/SystemMessage';
import DaySeparator from 'Pages/chat/components/DaySeparator';
import * as constants from "Constants/chat/chatArea";
import "./style.scss";

function dateToText(date) {
  let text;
  let today = new Date();
  let yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);
  let monthNames = ["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"];

  if (cmpDates(date,today)) {
    text = "Сегодня";
  }
  else if (cmpDates(date,yesterday)) {
    text = "Вчера";
  }
  else {
    text = date.getDate() + " " + monthNames[date.getMonth()] + " " + date.getFullYear();
  }

  return text;
}

function cmpDates(date1,date2) {
  if (date1.getDate()===date2.getDate() && date1.getMonth()===date2.getMonth() && date1.getFullYear()===date2.getFullYear()) {
      return true;
  }
  else {
    return false;
  }
}

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

      let date = new Date(this.props.messages[i].date);
      if (prevMessage===undefined) {
        let daySeparatorText = dateToText(date);
        messagesList.push(<DaySeparator key={i+'s'} value={daySeparatorText} />);
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

      //add DaySeparator if it need
      if (nextMessage!==undefined) {
        let nextDate = new Date(nextMessage.date);
        if (!cmpDates(date,nextDate)) {
          let daySeparatorText = dateToText(nextDate);
          messagesList.push(<DaySeparator key={i+'s'} value={daySeparatorText} />);
        }
      }
    }

    return (
      <Scrollbars >
        <div className="chatMessagesList">
          {messagesList}
        </div>
      </Scrollbars>
    )
  }
}