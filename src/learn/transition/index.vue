<template>
  <div>
    <transition name="fade">
      <p v-if="show">fade</p>
    </transition>
    <button @click="show = !show">toggle</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: true
    }
  }
}
</script>

<style>
.fade-enter{
  opacity: 0;
}
.fade-enter-active, .fade-leave-active{
  transition: all 1s ease 0s;
}
.fade-leave-to{
  opacity: 0;
}
</style>
