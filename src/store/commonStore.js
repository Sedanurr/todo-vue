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
    }
  };
  export default {
    state,
    getters,
    actions,
    mutations,
  };
  