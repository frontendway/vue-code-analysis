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
      useless: 0,
      nested: {
        a: {
          b: 1
        }
      }
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
      this.nested.a.b = 2
    },
    changeLast () {
      this.lastName = 'zhang'
    }
  },
  watch: {
    useless (newVal) {
      console.log('useless:', newVal)
    },
    name: {
      immediate: true,
      handler (newVal) {
        console.log('name:', newVal)
      }
    },
    nested: {
      deep: true,
      handler (newVal) {
        console.log('nested', newVal)
      }
    }
  }
}
</script>
