import Vue from 'vue'
import App from './learn/App.vue'
import AppMounted from '@/learn/AppMounted'
import CleanupDeps from './learn/CleanupDeps.vue'
import VueSet from './learn/VueSet.vue'
import Computed from './learn/Computed.vue'
import Watcher from './learn/Watcher.vue'
import SimpleWatcher from './learn/SimpleWatcher.vue'
import Update1 from './learn/update1/index.vue'
import Update2 from './learn/Update2.vue'
import Update3 from './learn/update3/index.vue'
import Props from './learn/props/index.vue'
import Event from './learn/event/Index.vue'
import MoreKey from './learn/MoreKey.vue'
import VModel from './learn/VModel.vue'
import Slot from './learn/slot/index.vue'

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

// 测试初始化 props，子组件修改 props 报错原理
/* new Vue({
  el: '#app',
  render: c => c(PropsWrap)
}) */

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
  
  render: c => c(Computed)
}) */

// watcher 实现原理
/* new Vue({
  el: '#app',
  
  render: c => c(SimpleWatcher)
}) */

// 复杂 Watcher 实现原理
/* new Vue({
  el: '#app',
  
  render: c => c(Watcher)
}) */

// 有子组件 diff 对比
/* new Vue({
  el: '#app',
  
  render: c => c(Update1)
}) */

// 无子组件当前组件 diff 对比
/* new Vue({
  el: '#app',
  
  render: c => c(Update2)
}) */

// 只有子组件数据更新，父组件是否更新
/* new Vue({
  el: '#app',
  render: c => c(Update3)
}) */

// props 的规范化初始化
/* new Vue({
  el: '#app',
  render: c => c(Props)
}) */

// 自定义事件以及原生事件
/* new Vue({
  el: '#app',
  render: c => c(Event)
}) */

/* new Vue({
  el: '#app',
  render: c => c(MoreKey)
}) */

/* new Vue({
  el: '#app',
  render: c => c(VModel)
}) */

new Vue({
  el: '#app',
  render: c => c(Slot)
})
