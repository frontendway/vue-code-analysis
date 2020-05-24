<template>
  <div>
    <div>
      {{name}}
    </div>
    <button @click="change">change</button>
    <button @click="changeLast">change last name</button>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data () {
    return {
      firstName: 'yi',
      lastName: 'huang',
      useless: 0
    }
  },
  computed: {
    name () {
      if (this.useless > 0){
        return this.firstName + this.lastName
      }
      return 'please click change'
    }
  },
  methods: {
    change () {
      this.useless++
    },
    changeLast () {
      this.lastName = 'zhang'
    }
  }
}
</script>
