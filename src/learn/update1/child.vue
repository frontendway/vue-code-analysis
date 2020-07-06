<template>
  <div v-if="flag">我是 div 标签</div>
  <ul v-else>
    <li>我是 li 标签</li>
  </ul>
</template>

<script>
export default {
  props: ['flag']
}
</script>
