import React, {Component} from 'react';

import "./style.scss";

export default class DaySeparator extends Component {
  render() {
    return (
      <div className="daySeparator">
        {this.props.value}
      </div>
    );
  }
}