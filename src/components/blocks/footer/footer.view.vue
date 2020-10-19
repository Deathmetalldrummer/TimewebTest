<template lang="pug">
footer.footer
  ul.footer__menu
    li.footer__(v-for="item in menu")
      a(:href="item.link").footer__menuLink {{item.name}}
  p.footer__copyright(v-html='copyright')
</template>

<script>
export default {
  name: 'FooterView',
  props: ['data'],
  data () {
    return {
      message: 'Слава Одину, FooterView работает!',
      menu: this.$props.data.menu,
      copyright: this.$props.data.copyright
    }
  }
}
</script>

<style scoped lang="sass">
.footer
  padding: 8vh 15%
  background-color: #222
.footer__menu
  padding: 0
  display: block
  margin: 0 auto 2em
  list-style: none
  text-align: center
.footer__
  display: inline-block
  vertical-align: middle
  &+&
    margin-left: 1em
.footer__menuLink
  color: #fff
  text-decoration: none
  &:hover
    text-decoration: underline
.footer__copyright
  text-align: center
  color: #999
  margin: 0
  font-size: 0.85em
</style>
