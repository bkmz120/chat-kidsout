import React, {Component} from 'react';
import {connect} from "react-redux";

import CollocutorBar from "Pages/chat/components/CollocutorBar";
import MessagesList from "Pages/chat/components/MessagesList";
import "./style.scss";

class ChatArea extends Component {
  render() {
    return (
      <div className="chatArea">
        <div className="chatArea__collocutorBar">
          <CollocutorBar collocutor={this.props.collocutor} />
        </div>
        <div className="chatArea__messagesList">
          <MessagesList
            messages={this.props.messages}
            collocutor={this.props.collocutor}
          />
        </div>
        <div className="chatArea__newMessage">
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    collocutor:state.chatArea.collocutor,
    messages:state.chatArea.messages,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ChatArea);