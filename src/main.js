import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueConfirmDialog from 'vue-confirm-dialog'
import Vuelidate from 'vuelidate'


Vue.config.productionTip = false
Vue.use(VueConfirmDialog);
Vue.component('vue-confirm-dialog', VueConfirmDialog.default)
Vue.use(Vuelidate);



new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
