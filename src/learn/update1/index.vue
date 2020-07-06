<template>
  <div id="app">
    <div>{{flag}}</div>
    <Child :flag="flag" />
    <button @click="toggle">btn1</button>
  </div>
</template>

<script>
import Child from './child.vue'

export default {
  data () {
    return {
      flag: true
    }
  },
  components: {
    Child
  },
  methods: {
    toggle () {
      this.flag = !this.flag
    }
  }
}
</script>
