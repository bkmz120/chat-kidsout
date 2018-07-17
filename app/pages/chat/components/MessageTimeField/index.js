import React, {Component} from 'react';
import "./style.scss";

export default class MessageTimeField extends Component {
  render() {
    return (
      <div className="messageTimeField">
        {this.props.value}
      </div>
    )
  }
}