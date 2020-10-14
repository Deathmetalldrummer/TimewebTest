<template lang="pug">
div
  h1 {{message}}
  v-btn(color="black" dark @click="submit($event)") Submit
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      message: 'Слава Одину, Header работает!',
      dataForEmit: {
        name: 'Header',
        message: 'Слава Одину, Header работает!'
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
