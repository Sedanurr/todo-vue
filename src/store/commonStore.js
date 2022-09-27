const state = {
    items: [],
    selectedId: "",
    showDialog: false,
    showDialogUpdate: false,
    selectedItem: "",
  };
  const getters = {
    allItems: (state) => state.items,
    dialog(state) {
      return state.showDialog;
    },
    updateDialog(state) {
      return state.showDialogUpdate;
    }
  };
  const actions = {
    addItem({ commit }, item) {
      commit("add_item", item);
    },
    deleteItem({ commit }, id) {
      commit("delete_item", id);
    },
    updateItem({ commit }, item) {
      commit("update_item", item);
    },
    changeItemStatus({ commit }, id) {
      commit("change_status", id);
    },
    cancel({ commit }, item) {
      commit("cancel", item);
    },
    cancelUpdate({ commit }, item) {
      commit("cancelUpdate", item);
    },
    confirmUpdate({ commit }, item) {
      commit("confirmUpdate", item);
    },
    showDialog({ commit }, id) {
      commit("toogle_dialog", id);
    },
    showDialogUpdate({ commit }, id) {
      commit("update_dialog", id);
    }
  };
  const mutations = {
    add_item(state, item) {
      state.items.push(item);
    },
    delete_item(state, id) {
      state.items = state.items.filter((item) => item.id != id);
    },
    update_item(state, item) {
      state.selectedItem = item;
      let index = state.items.findIndex((i) => i.id == item.id);
      console.log(index);
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
    getters,
    actions,
    mutations,
  };
  