<template lang="pug">
section.blocks
  .blocks__(v-for="(item, index) in blocks" :id="'section_' + index")
    component(:is="item.name" :data="item.data")
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
    block () { return this.$store.getters.blocks(this.projectID, this.pageID) || [] }
  },
  mounted () {
    this.blocks = this.block
  }
}
</script>

<style scoped lang='sass'>
</style>
