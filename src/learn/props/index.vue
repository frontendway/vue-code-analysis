<template>
  <div id="app">
    <Compa :msg="msg" />
    <Compb age="20" />
    <button @click="change">change</button>
  </div>
</template>

<script>
import Compa from './Compa.vue'
import Compb from './Compb.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: {
        a: 1,
        b: 2
      }
    }
  },
  components: {
    Compa,
    Compb
  },
  methods: {
    change () {
      this.msg.a = 2
    }
  }
}
</script>
