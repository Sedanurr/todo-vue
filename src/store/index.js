import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [
      {
        id: 1,
        title: "deneme",
        done: false,
      },
    ],
    selectedId:"",
    showDialog:false,
  },
  getters: {
    allItems: state => state.items,
    dialog(state) {
      return state.showDialog
    }
  },
  actions: {
    addItem({ commit }, item) {
      commit("add_item", item);
    },
    deleteItem({ commit }, id) {
      commit("delete_item", id);
    },
    updateItem({commit},item) {
      commit("update_item",item)
    },
    changeItemStatus({ commit }, id) {
      commit("change_status", id);
    },
    cancel({commit},item) {
      commit('cancel',item)
    },
    confirm({commit},item) {
      commit('confirm',item)
    },
    showDialog({commit},id) {
      commit('toogle_dialog',id)
    }
  },
  mutations: {
    add_item(state, item) {
      state.items.push(item);
    },
    delete_item(state, id) {
      state.items=state.items.filter((item) => item.id != id)      
    },
    update_item(state,item){
      let index = state.items.findIndex((i) => i.id == item.id)
      console.log(index)

    },
    change_status(state, id) {
      state.items.done = state.items.filter((item) =>
        item.id == id ? (item.done = !item.done) : ""
      );
    },
    toogle_dialog(state,id) {
      state.showDialog = true
      state.selectedId = id
    },
    cancel(state,bool) {
      state.showDialog = !bool 
    },
    confirm(state,bool) {
      state.showDialog = !bool
      
    }

  },
  modules: {},
});
