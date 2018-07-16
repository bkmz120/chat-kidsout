import * as constants from "Constants/chat/chatArea"

const initialState = {
  collouctor: {
    id:1,
    name:"Светлана П.",
    avatar:"",
    isOnline:true,
  },
  messages: [
    {
      id:1,
      type:constants.MESSAGE_TYPE_MY,
      time:"14:02",
      text:"This is message text",
      my: {
        status:constants.MY_MESSAGE_STATUS_SENDED,
      }
    }
  ],
}

export default function (state = initialState, action) {
  switch(action.type) {
    case constants.SOME_ONE:
      return {
        ...state,
      }
    default:
      return state;
  }
}