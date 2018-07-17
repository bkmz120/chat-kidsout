import React, { Component } from 'react';

import BaseLayout from "Common/components/BaseLayout";
import ChatArea from "Pages/chat/containers/ChatArea";
import "./style.scss";

export default class ChatPage extends Component {
  render() {

    return (
      <BaseLayout>
        <div className="chatPage">
          <div className="chatPage__contacts">
          </div>
          <div className="chatPage__chatArea">
            <ChatArea />
          </div>
        </div>
      </BaseLayout>
    );
  }
}
