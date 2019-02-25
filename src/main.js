import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueScrollTo from 'vue-scrollto'
import './registerServiceWorker'

library.add(faArrowDown)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueScrollTo)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
