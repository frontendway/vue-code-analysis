<template>
  <div>
    {{ age }}
  </div>
</template>

<script>
export default {
  props: {
    age: {
      type: String,
      default: 10,
      validator (value) {
        return !!value
      }
    }
  }
}
</script>
