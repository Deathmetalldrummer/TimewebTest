<template lang="pug">
  h1 {{message}}
</template>

<script>
export default {
  name: 'TextComponent',
  data () {
    return {
      message: 'Слава Одину, TextComponent работает!'
    }
  }
}
</script>

<style scoped lang="sass"></style>
