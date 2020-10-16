<template lang="pug">
v-carousel(height="100vh" v-model="slideModel").carousel
  v-btn(color="white" fab dark @click.prevent.stop="slideDelete()" v-if="slides && slideModel < slides.length").carousel__delete
    v-icon(dark color="red accent-4") mdi-delete
  v-carousel-item(v-for='(slide, i) in slides' :key="i" :src="slide" @click="openModal()")
  v-carousel-item(@click="openModal(true)" :key="slides.length")
    v-sheet(color='lime accent-2' height='100%' tile)
      v-row.fill-height(align='center' justify='center')
        .display-3 Add slide
  Modal(title="Choose image" :model="dialog" @submit="submit($event)" width="80%")
    .modalImages
      .modalImages__(v-for='item in sourceList' @click="activeSlide = item")
        v-img(:src="`https://picsum.photos/id/2${item}/1280/1024`" :class="{'modalImages__image_active': item === activeSlide}").modalImages__image

</template>

<script>
import Modal from '@/components/Modal'
export default {
  name: 'Slider',
  props: ['data'],
  components: { Modal },
  data () {
    return {
      message: 'Слава Одину, Slider работает!',
      sourceList: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 25, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 99],
      activeSlide: null,
      slides: this.$props.data || [],
      typeModal: false,
      slideModel: 0,
      dialog: false
    }
  },
  methods: {
    submit ($event) {
      this.dialog = false
      if ($event) {
        if (this.typeModal) {
          this.slides.push(`https://picsum.photos/id/2${this.activeSlide}/1280/1024`)
        } else {
          this.slides[this.slideModel] = `https://picsum.photos/id/2${this.activeSlide}/1280/1024`
        }
      }
      this.typeModal = false
      this.activeSlide = null
      this.$emit('v-changed', this.slides)
    },
    slideDelete () {
      this.slides.splice(this.slideModel, 1)
      this.$emit('v-changed', this.slides)
    },
    openModal (type = false) {
      this.dialog = true
      this.typeModal = type
    }
  }
}
</script>

<style scoped lang="sass">
.carousel
  position: relative
.carousel__delete
  position: absolute
  top: 1em
  left: 50%
  transform: translateX(-50%)
  z-index: 99
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
