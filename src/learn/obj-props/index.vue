<template>
  <div>
    <Child :msg="msg" />
  </div>
</template>

<script>
import Child from './child.vue'

export default {
  components: {
    Child
  },
  data () {
    return {
      msg: {
        a: 'parent msg'
      }
    }
  }
}
</script>
