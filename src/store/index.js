import { createStore } from "redux";
let states = {
  list: [],
}
const reducer = function (state = states, action) {
  switch(action.type) {
    case 'setTimu':
      state.list = action.content
      break;
  }
  // console.log(state);
  return { ...state }; //相当于对象的COPY
};
const store = createStore(reducer);
// console.log(store);
export default store