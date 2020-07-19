<template>
  <div>
    <component :is="is" />
    <button @click="change">change</button>
  </div>
</template>

<script>
import Compa from './compa.vue'
import Compb from './compb.vue'

export default {
  components: {
    'compa': Compa,
    'compb': Compb
  },
  data () {
    return {
      is: 'compa'
    }
  },
  methods: {
    change () {
      this.is = this.is === 'compa' ? 'compb' : 'compa'
    }
  }
}
</script>
