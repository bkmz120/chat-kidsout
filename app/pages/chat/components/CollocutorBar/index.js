import React, {Component} from 'react';
import "./style.scss";

export default class CollocutorBar extends Component {
  render() {
    return (
      <div className="collocutorBar">
        <div className="collocutorBar__user">
          <div className="collocutorBar__user-name">Светлана П.</div>
          <div className="collocutorBar__user-status collocutorBar__user-status_online">В сети</div>
        </div>
        <div className="collocutorBar__ctrls">
          <a href="#" className="collocutorBar__profileLink">Профиль ситтера</a>
          <span className="collocutorBar__togglFav"></span>
        </div>
      </div>
    )
  }
}