import * as constants from "Constants/chat/chatArea"

const initialState = {
  collocutor: {
    id:1,
    name:"Светлана П",
    avatar:"",
    isOnline:true,
  },
  messages: [
    {
      id:1,
      type:constants.MESSAGE_TYPE_MY,
      time:"14:02",
      text:"This is message text",
      status:constants.MY_MESSAGE_STATUS_SENDED,
    },
    {
      id:2,
      type:constants.MESSAGE_TYPE_MY,
      time:"14:03",
      text:"This is message text2",
      status:constants.MY_MESSAGE_STATUS_SENDED,
    },
    {
      id:3,
      type:constants.MESSAGE_TYPE_MY,
      time:"14:05",
      text:"Some things in CSS are a bit tedious to write, especially with CSS3 and the many vendor prefixes that exist. A mixin lets you make groups of CSS declarations that you want to reuse throughout your site. You can even pass in values to make your mixin more flexible. A good use of a mixin is for vendor prefixes. Here's an example for transform.",
      status:constants.MY_MESSAGE_STATUS_SENDED,
    },
    {
      id:3,
      type:constants.MESSAGE_TYPE_SYSTEM,
      time:"14:05",
      text:"Принял(а) заказ на 17 июля 15:00-17:00",
      status:constants.SYSTEM_MESSAGE_STATUS_SUCCESS,
    },
    {
      id:4,
      type:constants.MESSAGE_TYPE_COLLOCUTOR,
      time:"14:09",
      text:"To create a mixin you use the @mixin directive and give it a name. We've named our mixin transform. We're also using the variable $property inside the parentheses so we can pass in a transform of whatever we want. After you create your mixin, you can then use it as a CSS declaration starting with @include followed by the name of the mixin. When your CSS is generated it'll look like this:"
    },
    {
      id:5,
      type:constants.MESSAGE_TYPE_COLLOCUTOR,
      time:"14:09",
      text:"hi!"
    },
    {
      id:6,
      type:constants.MESSAGE_TYPE_COLLOCUTOR,
      time:"14:09",
      text:"Buy!"
    },
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