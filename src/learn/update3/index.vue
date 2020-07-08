<template>
  <div id="app">
    父组件：{{ flag }}
    <Child />
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
  }
}
</script>
