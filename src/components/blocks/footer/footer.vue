<template lang="pug">
div
  h1 {{message}}
  v-btn(color="black" dark @click="submit($event)") Submit
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      message: 'Слава Одину, Footer работает!',
      dataForEmit: {
        name: 'Footer',
        message: 'Слава Одину, Footer работает!'
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
