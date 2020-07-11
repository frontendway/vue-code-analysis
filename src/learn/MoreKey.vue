<template>
  <div>
    <ul>
      <li :class="{'active': item.id}" v-for="(item) of list" :key="item.id">{{ item.id }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {id: 1},
        null,
        {id: 3}
      ]
    }
  }
}
</script>
