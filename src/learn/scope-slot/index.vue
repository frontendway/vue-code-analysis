<template>
  <div>
    <Child>
      <template slot-scope="props">
        {{ props.title }}
        {{ props.msg }}
      </template>
    </Child>
  </div>
</template>

<script>
import Child from './child.vue'

export default {
  components: {
    Child
  }
}
</script>
