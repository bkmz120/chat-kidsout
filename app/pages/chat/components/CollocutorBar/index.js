import React, {Component} from 'react';
import "./style.scss";

export default class CollocutorBar extends Component {

  render() {
    let userStatusText,userStatusClassMod;
    if (this.props.collocutor.isOnline) {
      userStatusText = "В сети";
      userStatusClassMod = "online";
    }
    else {
      userStatusText = "Не в сети";
      userStatusClassMod = "offline";
    }
    return (
      <div className="collocutorBar">
        <div className="collocutorBar__user">
          <div className="collocutorBar__user-name">
            {this.props.collocutor.name}
          </div>
          <div className={"collocutorBar__user-status collocutorBar__user-status_"+userStatusClassMod}>
            {userStatusText}
          </div>
        </div>
        <div className="collocutorBar__ctrls">
          <a href="#" className="collocutorBar__profileLink">Профиль ситтера</a>
          <a href="#" className="collocutorBar__mobile-menu">...</a>
          <span className="collocutorBar__togglFav"></span>
        </div>
      </div>
    )
  }
}