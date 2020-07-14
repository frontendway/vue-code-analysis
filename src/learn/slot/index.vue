<template>
  <section>
    <layout>
      <h1 slot="header">我是标题</h1>
      <p>我是内容</p>
      <div slot="footer">我是底部</div>
    </layout>
  </section>
</template>

<script>
import Layout from './layout.vue'

export default {
  components: {
    Layout
  }  
}
</script>
