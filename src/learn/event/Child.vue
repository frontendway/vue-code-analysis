<template>
  <div>
    <button @click="clickHandle">btn</button>
  </div>
</template>

<script>
export default {
  methods: {
    clickHandle () {
      console.log('child click')
      this.$emit('select')
    }
  }
}
</script>
