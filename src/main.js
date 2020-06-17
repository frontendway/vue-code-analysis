import Vue from 'vue'
import App from './learn/App.vue'
import AppMounted from '@/learn/AppMounted'
import Diff1 from '@/learn/Diff1'
import CleanupDeps from './learn/CleanupDeps.vue'
import VueSet from './learn/VueSet.vue'
import Computed from './learn/Computed.vue'

import router from './router'
import RouterComp from './router-learn/router-comp.vue'
// import store from './store'

Vue.config.productionTip = false

// 组件化及生命周期函数执行
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

// mounted 钩子函数合并到父组件
/* new Vue({
  el: '#app',
  mounted () {
    console.log('root mounted')
  },
  render: h => h(AppMounted)
}) */

// 组件注册
/* Vue.component('app', App)
new Vue({
  el: '#app',
  template: '<app></app>'
}) */

/* 
异步组件
.vue 文件中写法
  import Header from '@/header.vue'
  components: {
    Header (resolve) {
      setTimeout(() => resolve(Header), 2000)
  components: {
    Header: () => import('./components/HelloWorld.vue')
*/

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
new Vue({
  el: '#app',
  render: c => c(CleanupDeps)
})

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

/* 
  父组件重渲染，子组件是否重渲染
  helloworld 组件的 diff
*/
/* new Vue({
  el: '#app',
  render: createElement => createElement(Diff1)
}) */
