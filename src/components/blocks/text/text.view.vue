<template lang="pug">
div(v-html="data").text
</template>

<script>
export default {
  name: 'TextView',
  props: ['data'],
  data () {
    return {
      message: 'Слава Одину, TextView работает!'
    }
  }
}
</script>

<style scoped lang="sass">
.text
  padding: 15vh 20%
</style>
