<template lang="pug">
header._header(:style="style")
  .header__overlay(@click="dialog = true")
  h1.header__title
    Editable(v-model="title" @changed="submit")
  p.header__subtitle
    Editable(v-model="subtitle" @changed="submit")
  Modal(title="Choose image" :model="dialog" @submit="submitModal($event)" width="80%")
    .modalImages
      .modalImages__(v-for='item in sourceList' @click="activeSlide = item")
        v-img(:src="`https://picsum.photos/id/2${item}/1280/1024`" :class="{'modalImages__image_active': item === activeSlide}").modalImages__image
</template>

<script>
import Editable from '@/components/Editable'
import Modal from '@/components/Modal'

export default {
  name: 'Header',
  props: ['data'],
  components: {
    Editable,
    Modal
  },
  data () {
    return {
      message: 'Слава Одину, Header работает!',
      title: (this.$props.data && this.$props.data.title) || 'Title',
      subtitle: (this.$props.data && this.$props.data.subtitle) || 'Subtitle',
      srcBG: (this.$props.data && this.$props.data.srcBG) || 'https://picsum.photos/1280/1024',
      sourceList: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 25, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 99],
      dialog: false,
      activeSlide: null
    }
  },
  computed: {
    style () { return { backgroundImage: `url(${this.srcBG})` } }
  },
  mounted () {
    this.submit()
  },
  methods: {
    submit ($event) {
      this.$emit('v-changed', {
        title: this.title,
        subtitle: this.subtitle,
        srcBG: this.srcBG
      })
    },
    submitModal ($event) {
      if ($event) {
        this.srcBG = `https://picsum.photos/id/2${this.activeSlide}/1280/1024`
        this.submit()
      }
      this.dialog = false
      this.activeSlide = null
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
  background-repeat: no-repeat
  background-size: cover
  background-position: center
.header__overlay
  position: absolute
  top: 0
  bottom: 0
  left: 0
  right: 0
  z-index: 0
  background-color: rgba(0, 0, 0, 0.2)
  cursor: pointer
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
.modalImages
  display: flex
  flex-flow: row wrap
.modalImages__
  width: 25%
  padding: 0.5em
.modalImages__image
  cursor: pointer
  transition-duration: 0.3s
.modalImages__image_active
  box-shadow: 0 0 8px 5px black
</style>
