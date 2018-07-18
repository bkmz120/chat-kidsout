import React, {Component} from 'react';
import "./style.scss";

export default class Button extends Component {
  render() {
    let disabledClass;
    if (this.props.disabled) {
      disabledClass = "btn_disabled ";
    }
    return (
      <div className={"btn " + disabledClass + this.props.className}>
        {this.props.text}
      </div>
    )
  }
}