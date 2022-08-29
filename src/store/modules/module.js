import * as types from '../mutation-types'


const state = {
  items: [],
  selectedId: "",
  showDialog: false,
  showDialogUpdate: false,
  selectedItem: "",
};
const mutations = {
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
  change_status(state, id) {
    state.items.done = state.items.filter((item) =>
      item.id == id ? (item.done = !item.done) : ""
    );
  },
  toogle_dialog(state, id) {
    state.showDialog = true;
    state.selectedId = id;
  },
  update_dialog(state, selectedItem) {
    state.showDialogUpdate = true;
    state.selectedItem = selectedItem;
  },
  cancel(state, bool) {
    state.showDialog = !bool;
  },
  cancelUpdate(state, bool) {
    state.showDialogUpdate = !bool;
  },
};
export default {
  state,
  mutations,
};
