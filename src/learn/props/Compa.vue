<template>
  <div>
    {{ msgCopy }}
  </div>
</template>

<script>
export default {
  props: ['msg'],
  computed: {
    msgCopy () {
      return this.msg
    }
  }
}
</script>
