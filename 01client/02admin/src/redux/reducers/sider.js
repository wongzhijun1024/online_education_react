let actionTypes = require("../actions/ActionTypes");
const initialState = {
  collapsed: false
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_ACTION:
      console.log("被点击！");
      return Object.assign({}, state, {
        collapsed: !state.collapsed
      });
    default:
      return state;
  }
}
