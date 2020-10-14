<template lang="pug">
div
  h1 {{message}}
  v-btn(color="black" dark @click="submit($event)") Submit
</template>

<script>
export default {
  name: 'TextComponent',
  data () {
    return {
      message: 'Слава Одину, TextComponent работает!',
      dataForEmit: {
        name: 'TextComponent',
        message: 'Слава Одину, TextComponent работает!'
      }
    }
  },
  methods: {
    submit ($event) {
      this.$emit('v-changed', this.dataForEmit)
    }
  }
}
</script>

<style scoped lang="sass"></style>
