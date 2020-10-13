<template lang="pug">
  h1 {{message}}
</template>

<script>
export default {
  name: 'HeaderView',
  data () {
    return {
      message: 'Слава Одину, HeaderView работает!'
    }
  }
}
</script>

<style scoped lang="sass"></style>
