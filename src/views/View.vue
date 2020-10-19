<template lang="pug">
section.blocks
  .blocks__(v-for="(block, index) in blocks" :id="'section_' + index")
    component(:is="block.name" :data="block.data")
</template>

<script>
import * as components from '@/components/blocks/index.view'

export default {
  name: 'View',
  components: { ...components },
  data () {
    return {
      message: 'Слава Одину, View работает!',
      blocks: []
    }
  },
  computed: {
    projectID () { return this.$route.params.projectID },
    pageID () { return this.$route.params.pageID },
    page () { return this.$store.getters.page(this.projectID, this.pageID) || {} }
  },
  mounted () {
    this.blocks = this.page && this.page.content
  }
}
</script>

<style scoped lang='sass'>
</style>
