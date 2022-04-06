import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/theme.css'
Vue.use(ElementUI)

//导入导航栏Nav组件
import Nav from '@/components/Nav.vue'
Vue.component('Nav', Nav)
//导入页脚Footer组件
import Footer from '@/components/Footer.vue'
Vue.component('Footer', Footer)

//自定义scroll指令
Vue.directive('scroll', {
  // 指令的定义
  inserted: function(el, binding) {
    console.log(el)
    document.addEventListener('scroll', () => {
      if (window.pageYOffset > el.offsetHeight + binding.value) {
        el.classList.add('afternav')
      } else {
        el.classList.remove('afternav')
      }
    })
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
