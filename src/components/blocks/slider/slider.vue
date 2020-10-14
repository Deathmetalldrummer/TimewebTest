<template lang="pug">
div
  h1 {{message}}
  v-btn(color="black" dark @click="submit($event)") Submit
</template>

<script>
export default {
  name: 'Slider',
  data () {
    return {
      message: 'Слава Одину, Slider работает!',
      dataForEmit: {
        name: 'Slider',
        message: 'Слава Одину, Slider работает!'
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
