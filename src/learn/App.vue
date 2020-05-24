<template>
  <div id="app">
    <span v-if="flag">aaa</span>
    <div>{{msg}}</div>
    <button>btn1</button>
    <!-- <hello-world></hello-world> -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data () {
    return {
      flag: true,
      msg: 'msg'
    }
  },
  mounted () {
    console.log('app mounted')
  }
}
</script>
