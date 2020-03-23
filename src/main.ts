import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router/router'
import store from './store/store'


import 'firebase/firestore';
import 'firebase/auth';

import '@/assets/general-styles.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons'
library.add(faCheckSquare)
Vue.component('font-awesome-icon', FontAwesomeIcon)

import Vue2TouchEvents from 'vue2-touch-events'
Vue.use(Vue2TouchEvents, {
  swipeTolerance: 99,
})

Vue.config.productionTip = false

Vue.filter('date', (unformattedDate: String) => {
  if(!unformattedDate) return '';
  return `${unformattedDate.substring(5,7)}/${unformattedDate.substring(8)}`;
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
