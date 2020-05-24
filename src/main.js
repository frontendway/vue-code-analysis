import Vue from 'vue'
import App from './learn/App.vue'
import CleanupDeps from './learn/CleanupDeps.vue'
import VueSet from './learn/VueSet.vue'
import Computed from './learn/Computed.vue'

import router from './router'
import RouterComp from './router-learn/router-comp.vue'
// import store from './store'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  data: {
    msg: 'hello vue',
  }
})

// 组件化原理及生命周期执行原理
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

// 合并配置
/* const childComp = {
  template: '<div>{{msg}}</div>',
  created () {
    console.log('child created')
  },
  mounted () {
    console.log('child mounted')
  },
  data () {
    return {
      msg: 'child hello vue'
    }
  }
}
Vue.mixin({
  created () {
    console.log('parent created')
  }
})
new Vue({
  el: '#app',
  render: h => h(childComp)
}) */

// 组件注册
/* Vue.component('app', App)
new Vue({
  el: '#app',
  template: '<app></app>'
}) */

// 异步组件
/* 
.vue 文件中写法
  import Header from '@/header.vue'
  components: {
    Header (resolve) {
      setTimeout(() => resolve(Header), 2000)
  components: {
    Header: () => import('./components/HelloWorld.vue') */

// Vue.component('HelloWorld', function (resolve, reject) {
//   import(/* webpackChunkName:'HelloWorld' */ './components/HelloWorld.vue')
//   .then(({default: res}) => {
//     resolve(res)
//   })
// })
// new Vue({
//   el: '#app',
//   render: h => h(App)
// }) 

// 异步组件 promise
// Vue.component('HelloWorld', 
//   () => import(/* webpackChunkName:'HelloWorld' */ './components/HelloWorld.vue') 
// )
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

// 依赖收集与 cleanupDeps 与循环更新 bug demo
/* new Vue({
  el: '#app',
  render: c => c(CleanupDeps)
}) */

// Vue.set
/* new Vue({
  el: '#app',
  render: c => c(VueSet)
}) */

// Computed
/* new Vue({
  el: '#app',
  router,
  render: c => c(RouterComp)
}) */
