<template>
  <div>
    <slot title="子组件标题" :msg="msg" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'child message'
    }
  }
}
</script>
