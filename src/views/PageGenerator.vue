<template lang="pug">
    h1 {{message}} {{id}}
</template>

<script>
export default {
  name: 'PageGenerator',
  data () {
    return {
      message: 'Слава Одину, PageGenerator работает!'
    }
  },
  computed: {
    id () { return this.$route.params.id }
  }
}
</script>

<style scoped lang='sass'>
</style>
