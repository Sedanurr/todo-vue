import * as types from './mutation-types'
export default {
    addItem({ commit }, item) {
        commit(types.ADD_ITEM, item);
      },
      deleteItem({ commit }, id) {
        commit(types.DELETE_ITEM, id);
      },
      updateItem({ commit }, item) {
        commit(types.UPDATE_ITEM, item);
      },
      changeItemStatus({ commit }, id) {
        commit(types.CHANGE_STATUS, id);
      }
}