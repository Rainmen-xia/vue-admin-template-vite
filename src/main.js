import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 改成 vite windCss
import 'virtual:windi.css'
import '@/styles/index.scss' // global css

import App from './App.vue'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control


import { Message, MessageBox, Loading, Notification } from 'element-ui';


import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
window.monaco = monaco;


MessageBox.confirm('12321', '12321', {
  iconClass: '',
  dangerouslyUseHTMLString: false,
  customClass: '',
});

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
import { mockXHR } from '../mock/index.js'
// if (process.env.NODE_ENV === 'production') {
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'development') {
  // const { mockXHR } = require('../mock')
  mockXHR()
}

/**
 * element-ui
 */
Vue.use(ElementUI, { size: 'small' })

/**
 * @vue/composition-api
 */
import VueCompositionApi from '@vue/composition-api'
Vue.use(VueCompositionApi)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
})
