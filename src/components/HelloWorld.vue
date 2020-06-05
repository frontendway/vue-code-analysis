<template>
  <div class="hello">
    <h1 v-if="flag">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  props: ['flag'],
  name: 'HelloWorld',
  data () {
    return {
      msg: 'hello world 组件'
    }
  },
  mounted () {
    console.log('helloworld mounted')
  }
}
</script>
