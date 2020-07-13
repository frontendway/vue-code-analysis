<template>
  <div>
    <p>输出信息：{{ message }}</p>
    <input type="text" v-model="message">
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: ''
    }
  }
}
</script>
