<template>
  <div>
    <ul>
      <li v-for="item of arrs" :key="item">{{item}}</li>
    </ul>
    <button @click="add">add</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      arrs: ['1a', '2b', '3c']
    }
  },
  methods: {
    add () {
      this.arrs.push('4d')
    }
  }
}
</script>
