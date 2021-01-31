import Vue from 'vue';
import router from './router'
import App from './App.vue'
import '../../style/common.css'
import '../../style/semantic.min.css'
import $ from 'jquery'
import jQuery from 'jquery'
window.$ = $
window.jQuery = jQuery
import '../../style/semantic.min.js'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import hljs from 'highlight.js'
import 'highlight.js/styles/tomorrow.css';
Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

var mdocs=new Vue({
  el: '#app',
  router,
  data: {
    siteName: 'Python Guide'
  },
  components: { 
     App
  },
  template: '<App/>'
})