<template lang="pug">
v-carousel(height="100vh")
  v-carousel-item(v-for='(slide, i) in slides' :key="i" :src="slide")
</template>

<script>
export default {
  name: 'SliderView',
  props: ['data'],
  data () {
    return {
      message: 'Слава Одину, SliderView работает!',
      slides: this.$props.data || []
    }
  }
}
</script>

<style scoped lang="sass"></style>
