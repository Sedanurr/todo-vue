import Vue from "vue";
import Vuex from "vuex";
import commonStore from "./commonStore";
import module from './modules/module'

Vue.use(Vuex);

export default new Vuex.Store({ 
  ...commonStore,
  modules: {module},
});
