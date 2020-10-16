<template lang="pug">
    div
      header.header
        .header__.text-left
          v-btn(text @click="back()")
            v-icon mdi-arrow-left
            span.ml-2 Back
          v-btn(color="light-green accent-3" outlined @click="save()").ma-1 Save
          v-btn(color="yellow accent-4" outlined @click="saveAndExit()").ma-1 Save & Exit
        .header__.text-center
          v-btn(color="black" dark @click="addBlock()").ma-1
            v-icon mdi-plus
            span.ml-1 Add block
        .header__.text-right
          v-btn(color="blue accent-2" outlined @click="view()").ma-1 View
          v-btn(color="red accent-4" outlined @click="exit()").ma-1 Exit
      section.choice
        v-radio-group.choice__(v-model="choiceBlock" row)
          v-radio(v-for="(item, index) in blocksName" :key="index" :label="item" color="red" :value="item")
      section.blocks
        .blocks__(v-for="(item, index) in blocks" :id="'section_' + index")
          .blocks__control.control
            v-btn(color="black" dark icon @click="duplicate(index)").control__.control__duplicate
              v-icon mdi-content-copy
            v-btn(color="black" dark icon @click="remove(index)").control__.control__remove
              v-icon mdi-delete
            v-btn(color="black" dark icon @click="swap(index, 1)").control__.control__down
              v-icon mdi-arrow-down
            v-btn(color="black" dark icon @click="swap(index, -1)").control__.control__up
              v-icon mdi-arrow-up
          component(:is="item.name" :data='item.data' @v-changed="item.data = $event")
      .text-center
        v-btn(color="black" dark @click="addBlock()").ma-1
          v-icon mdi-plus
          span.ml-1 Add block
</template>

<script>
import * as components from '@/components/blocks/'
export default {
  name: 'PageGenerator',
  components: { ...components },
  data () {
    return {
      message: 'Слава Одину, PageGenerator работает!',
      blocks: [],
      blocksName: Object.keys(components),
      choiceBlock: ''
    }
  },
  computed: {
    projectID () { return this.$route.params.projectID },
    pageID () { return this.$route.params.pageID },
    block () { return this.$store.getters.blocks(this.projectID, this.pageID) || [] }
  },
  mounted () {
    this.blocks = this.block
  },
  methods: {
    back () {
      this.$router.push({ name: 'project', params: { projectID: this.projectID.toString() } })
    },
    addBlock () {
      if (this.choiceBlock) {
        this.blocks.push({
          name: this.choiceBlock,
          data: null
        })
      }
    },
    swap (index, step) {
      const arr = [...this.blocks]
      const endpoint = index + step
      if (endpoint >= 0 && endpoint < arr.length) {
        const _from = arr[index]
        const _to = arr[endpoint]
        arr[index] = _to
        arr[endpoint] = _from
        this.blocks = arr
      }
    },
    remove (index) {
      this.blocks.splice(index, 1)
    },
    duplicate (index) {
      const item = this.blocks[index]
      const first = this.blocks.slice(0, index + 1)
      const last = this.blocks.slice(index + 1)
      this.blocks = [
        ...first,
        item,
        ...last
      ]
    },
    save () {
      this.$store.dispatch('constructorUpdate', {
        projectID: this.projectID,
        pageID: this.pageID,
        data: this.blocks
      })
    },
    saveAndExit () {
      this.save()
      this.exit()
    },
    exit () {
      this.back()
    },
    view () {
      this.$router.push({ name: 'View', params: { projectID: this.projectID.toString(), pageID: this.pageID.toString() } })
    }
  }
}
</script>

<style scoped lang='sass'>
.header
  display: flex
  flex-flow: row nowrap
  align-items: center
  border-bottom: 1px solid #ccc
  &__
    width: (100%/3)
.blocks
  border-bottom: 1px solid #ccc
.blocks__
  position: relative
  border-bottom: 1px dashed #ccc
  &:first-of-type
    border-top: 1px solid #ccc

  &control
    transition-duration: 0.3s
    opacity: 0

  &:hover
    .blocks__control
      opacity: 1

.choice
  display: flex
  justify-content: space-around
  align-items: center
.choice__
.control
  background-color: #fff
  border-radius: 2em
  position: absolute
  top: 1em
  right: 1em
  z-index: 9999999
  &__
</style>
