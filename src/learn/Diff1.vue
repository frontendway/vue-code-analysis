<template>
  <div id="app">
    <span v-if="flag"> true </span>
    <div v-else> false </div>
    <button @click="toggle">btn1</button>
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
  methods: {
    toggle () {
      this.flag = false
    }
  }
}
</script>
