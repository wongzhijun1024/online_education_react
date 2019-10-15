let actionTypes = require("../actions/ActionTypes");
const initialState = {
  count: 0,
  hello: "I say "
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_ACTION:
      return Object.assign({}, state, {
        count: state.count + 1
      });
    case "sayHello":
      return Object.assign({}, state, {
        hello: state.hello + "hello! "
      });
    default:
      return state;
  }
}
