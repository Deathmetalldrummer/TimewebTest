<template lang="pug">
  section.blocks
    .blocks__(v-for="(block, index) in blocks" :id="'section_' + index")
      component(:is="block.name" :data="block.data")
</template>

<script>
import * as components from '@/components/blocks/index.view'

export default {
  name: 'Public',
  components: { ...components },
  data () {
    return {
      message: 'Слава Одину, Public работает!',
      blocks: []
    }
  },
  computed: {
    id () { return this.$route.params.id },
    page () { return this.$store.getters.publicPage }
  },
  mounted () {
    this.$store.dispatch('publicPage', this.id)
  },
  watch: {
    page (value) {
      this.$store.dispatch('globalLoading', false)
      this.blocks = value && value.content
      if (value.title) {
        document.title = value.title
      }
    }
  }
}
</script>

<style scoped lang='sass'>
</style>
