<template>
  <div>
    {{ messAge }} <br/>
    {{ hobby }}
  </div>
</template>

<script>
export default {
  props: {
    messAge: [Boolean, String],
    hobby: {
      type: Object,
      default () {
        return {
          eat: 'apple'
        }
      }
    }
  }
}
</script>
