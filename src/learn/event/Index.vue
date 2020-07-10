<template>
  <div>
    <child @select="selectHandle" @click.native="clickHandle" />
  </div>
</template>

<script>
import Child from './Child.vue'

export default {
  components: {
    Child
  },
  methods: {
    clickHandle () {
      console.log('parent click')
    },
    selectHandle () {
      console.log('parent select')
    }
  }
}
</script>
