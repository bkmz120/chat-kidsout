const initialState = {

}

export default function (state = initialState, action) {
  switch(action.type) {
    case 'SOME_CONTACT':
      return {
        ...state,
      }
    default:
      return state;
  }
}