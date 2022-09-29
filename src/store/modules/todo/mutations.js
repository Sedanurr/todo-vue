import * as types from './mutation-types'

export default  {
  [types.ADD_ITEM] (state,item) {
    state.items.push(item)
  },
  [types.DELETE_ITEM] (state,id) {
    state.items = state.items.filter((item) => item.id !== id)
  },
  [types.UPDATE_ITEM] (state,item) {
    state.selectedId = item;
    let index = state.items.findIndex((i) => i.id == item.id)
    console.log(index)
  },
  [types.CHANGE_STATUS](state, id) {
    state.items.done = state.items.filter((item) =>
      item.id == id ? (item.done = !item.done) : ""
    );
  },
};

