<template>
  <div id="app">
    <span @click="toggle">{{flag}}</span>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      flag: true
    }
  },
  watch: {
    flag (newVal, oldVal) {
      console.log(newVal, oldVal)
    }
  },
  methods: {
    toggle () {
      this.flag = !this.flag
    }
  }
}
</script>
