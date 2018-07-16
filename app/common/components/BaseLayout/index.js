import React, {Component} from 'react';
import "./style.scss";

export default class BaseLayout extends Component {
  render() {
    return (
      <div className="baseLayout full-height">
        <div className="baseLayout__navbar">
        </div>
        <div className="baseLayout__content">
          {this.props.children}
        </div>
      </div>
    )
  }
}