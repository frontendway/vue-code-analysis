<template>
  <div>
    <div>{{msg}}</div>
    <div>{{obj}}</div>
    <button @click="changeMsg">change msg</button>
    <button @click="changeObj">change obj</button>
  </div>
</template>

<script>
export default {
  props: ['msg', 'obj'],
  methods: {
    changeMsg () {
      this.msg = 'new msg'
    },
    changeObj () {
      this.obj.a = 'new a'
    }
  }
}
</script>
