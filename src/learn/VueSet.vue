<template>
  <div>
    {{msg}}
    <div v-if="msg.b">
      {{msg.b}}
    </div>
    <button @click="changeb">changeb</button>
    <button @click="set">set</button>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data () {
    return {
      msg: {
        a: 1
      }
    }
  },
  methods: {
    set () {
      Vue.set(this.msg, 'b', 2)
    },
    changeb () {
      this.msg.b = 3
    }
  }
}
</script>
