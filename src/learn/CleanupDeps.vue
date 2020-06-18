<template>
  <div>
    <div v-if="flag">{{msg}}</div>
    <div v-else>{{msg1}}</div>
    <button @click="change">change</button>
    <button @click="toggle">toggle</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg2: 'msg2',
      msg1: 'msg1',
      flag: false
    }
  },
  methods: {
    toggle () {
      this.flag = !this.flag
    },
    change () {
      this.msg1 = Math.random()
    }
  },
  watch: {
    msg1 () {
      this.msg1 = Math.random() + 'new'
    }
  }
}
</script>
