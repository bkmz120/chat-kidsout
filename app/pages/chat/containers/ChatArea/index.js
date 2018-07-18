import React, {Component} from 'react';
import {connect} from "react-redux";

import CollocutorBar from "Pages/chat/components/CollocutorBar";
import MessagesList from "Pages/chat/components/MessagesList";
import NewMessage from "Pages/chat/components/NewMessage";
import "./style.scss";

class ChatArea extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newMessageHeight:66
    };
  }

  onNewMessageHeightChange(newHeight) {
    this.setState({
      newMessageHeight:newHeight
    });
  }


  render() {
    return (
      <div className="chatArea">
        <div className="chatArea__collocutorBar">
          <CollocutorBar collocutor={this.props.collocutor} />
        </div>
        <div
          className="chatArea__messagesList"
          style={{
            bottom:this.state.newMessageHeight
          }}
        >
          <MessagesList
            messages={this.props.messages}
            collocutor={this.props.collocutor}
          />
        </div>
        <div
          className="chatArea__newMessage"
          style={{
            height:this.state.newMessageHeight
          }}
        >
          <NewMessage onHeightChange={(newHeight) => this.onNewMessageHeightChange(newHeight)} />
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