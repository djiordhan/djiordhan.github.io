import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

import VueCodemirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/base16-dark.css'
import 'codemirror/mode/javascript/javascript.js'

Vue.config.productionTip = false

Vue.use(Buefy)
Vue.use(VueCodemirror, {
  options: {
    theme: 'base16-dark',
    tabSize: 4,
    mode: 'text/javascript',
    lineNumbers: true,
    viewportMargin: Infinity
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
