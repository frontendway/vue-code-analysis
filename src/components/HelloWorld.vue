<template>
  <div v-if="flag">我是 div 标签</div>
  <ul v-else>
    <li>我是 li 标签</li>
  </ul>
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
