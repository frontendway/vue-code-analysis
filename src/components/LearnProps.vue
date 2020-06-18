<template>
  <div class="hello">
    <h1 @click="setNewMsg">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'LearnProps',
  props: ['msg'],
  methods: {
    setNewMsg () {
      this.msg = 'new msg'
    }
  }
}
</script>
