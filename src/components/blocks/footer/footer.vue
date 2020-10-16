<template lang="pug">
footer.footer
  ul.footer__menu
    li.footer__(v-for="(item, index) in menu")
      a(:href="item.link" :alt="item.alt" @click.prevent="editLink(index)").footer__menuLink {{item.name}}
    li.footer__.footer__menuAdd
      v-btn(fab x-small color='white' @click="dialog = true")
        v-icon mdi-plus
  p.footer__copyright
    Editable(v-model="copyright" @changed="submit")
  Modal(title="Create link" :model="dialog" @submit="submitModal($event)" width="50%")
    br
    v-text-field(v-model="newLink.name" label="name" outlined)
    v-text-field(v-model="newLink.link" label="link" outlined)
    v-text-field(v-model="newLink.alt" label="alt" outlined)
    v-btn(block color="red accent-4" dark @click="linkDelete") Delete
</template>

<script>
import Editable from '@/components/Editable'
import Modal from '@/components/Modal'

export default {
  name: 'Footer',
  props: ['data'],
  components: {
    Editable,
    Modal
  },
  data () {
    return {
      message: 'Слава Одину, Footer работает!',
      copyright: (this.$props.data && this.$props.data.copyright) || '© All Rights Reserved. Ragnarok Publishing Design',
      dialog: false,
      updatingLinkIndex: null,
      newLink: { link: '', name: '', alt: '' },
      menu: (this.$props.data && this.$props.data.menu) || []
    }
  },
  mounted () {
    this.submit()
  },
  methods: {
    submit ($event) {
      this.$emit('v-changed', {
        menu: this.menu,
        copyright: this.copyright
      })
    },
    submitModal ($event) {
      if ($event) {
        if (this.updatingLinkIndex !== null) {
          this.menu[this.updatingLinkIndex] = this.newLink
        } else {
          this.menu.push(this.newLink)
        }
        this.submit()
      }
      this.stateReset()
    },
    editLink (index) {
      this.updatingLinkIndex = index
      this.newLink = { ...this.menu[index] }
      this.dialog = true
    },
    linkDelete () {
      if (this.updatingLinkIndex !== null) {
        this.menu.splice(this.updatingLinkIndex, 1)
      }
      this.stateReset()
    },
    stateReset () {
      this.newLink = { link: '', name: '', alt: '' }
      this.updatingLinkIndex = null
      this.dialog = false
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
.footer__menuAdd
.footer__copyright
  text-align: center
  color: #999
  margin: 0
  font-size: 0.85em
</style>
