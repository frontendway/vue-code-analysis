<template>
  <div>
    父组件
    <LearnProps msg="learn props" />
  </div>
</template>

<script>
import LearnProps from '@/components/LearnProps.vue'

export default {
  components: {
    LearnProps
  }
}
</script>
