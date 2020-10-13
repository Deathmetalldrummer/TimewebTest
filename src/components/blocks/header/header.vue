<template lang="pug">
  h1 {{message}}
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      message: 'Слава Одину, Header работает!'
    }
  }
}
</script>

<style scoped lang="sass"></style>
