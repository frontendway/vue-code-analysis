<template>
  <div>
    {{msg}}
    <button @click="set">set</button>
    <button @click="changeb">changeb</button>
    <hr />
    <ul>
      <li v-for="(item, idx) in arrs" :key="idx">{{ item }}</li>
    </ul>
    <button @click="changeArrs">change arrs</button>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  data () {
    return {
      msg: {
        a: 1
      },
      arrs: ['a', 'b', 'c']
    }
  },
  methods: {
    set () {
      Vue.set(this.msg, 'b', 2)
    },
    changeb () {
      this.msg.b = 3
    },
    changeArrs () {
      Vue.set(this.arrs, 1, 'd')
    }
  }
}
</script>
