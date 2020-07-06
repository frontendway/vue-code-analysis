<template>
  <div>
    <ul>
      <li v-for="item of list" :key="item">{{item}}</li>
    </ul>
    <button @click="toggle">toggle</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: ['a', 'b', 'c', 'd']
    }
  },
  methods: {
    toggle () {
      this.list.reverse().push('e')
    }
  }
}
</script>
