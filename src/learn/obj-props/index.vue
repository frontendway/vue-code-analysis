<template>
  <div>
    <Child :obj="obj" :msg="msg" />
  </div>
</template>

<script>
import Child from './Child.vue'

export default {
  components: {
    Child
  },
  data () {
    return {
      obj: {
        a: 'parent msg'
      },
      msg: 'msg'
    }
  }
}
</script>
