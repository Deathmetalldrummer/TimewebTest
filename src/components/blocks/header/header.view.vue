<template lang="pug">
header._header(:style="srcBG")
  h1.header__title(v-html="title")
  p.header__subtitle(v-html="subtitle")
</template>

<script>
export default {
  name: 'HeaderView',
  props: ['data'],
  data () {
    return {
      message: 'Слава Одину, HeaderView работает!',
      title: this.$props.data.title,
      subtitle: this.$props.data.subtitle,
      srcBG: { backgroundImage: `url(${this.$props.data.srcBG})` }
    }
  }
}
</script>

<style scoped lang="sass">
._header
  width: 100vw
  min-height: 100vh
  display: flex
  flex-flow: column nowrap
  justify-content: center
  align-items: center
  color: #fff
  position: relative
  text-align: center
.header__title
  position: relative
  z-index: 10
  font-size: 5em
  text-shadow: 0 0 15px #000
.header__subtitle
  position: relative
  z-index: 10
  font-size: 1.2em
  text-shadow: 0 0 10px #000
</style>
