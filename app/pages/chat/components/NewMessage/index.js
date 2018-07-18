import React, {Component} from 'react';
import TextareaAutosize from 'react-autosize-textarea';

import Button from "Common/components/Button";
import "./style.scss";

export default class NewMessage extends Component {

  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.state = {
      sendBtnActive:false
    }
  }

  onTextAreaResize() {
    this.props.onHeightChange(this.formRef.current.clientHeight);
  }

  onTextChange(e) {
    if (e.target.value=="") {
      this.setState({
        sendBtnActive:false
      });
    }
    else {
      this.setState({
        sendBtnActive:true
      });
    }
  }

  render() {
    return (
      <form className="newMessage" ref={this.formRef}>
        <TextareaAutosize
          placeholder="Введите текст сообщения..."
          className="newMessage__text"
          onResize={() => this.onTextAreaResize()}
          maxRows={6}
          onChange={(e) => this.onTextChange(e)}
        />
        <Button
          className="newMessage__btn"
          text="Отправить"
          disabled={!this.state.sendBtnActive}
        />
      </form>
    )
  }
}