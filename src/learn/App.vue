<template>
  <div id="app">
    <span v-if="flag">aaa</span>
    <div>{{msg}}</div>
    <button @click="flag = false">btn1</button>
    <hello-world></hello-world>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld'

export default {
  name: 'app',
  data () {
    return {
      flag: true,
      msg: 'msg'
    }
  },
  components: {
    // HelloWorld
  },
  mounted () {
    console.log('app mounted')
  }
}
</script>
