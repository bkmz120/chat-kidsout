import React, { Component } from 'react';
import {connect} from "react-redux";

import BaseLayout from "Common/components/BaseLayout";
import ChatArea from "Pages/chat/components/ChatArea";
import "./style.scss";

class ChatPage extends Component {
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
const mapStateToProps = (state, ownProps) => {
  return {

  };
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ChatPage);