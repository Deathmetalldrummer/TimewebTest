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
          v-btn(color="black" dark @click="addBlock()").ma-1 Add block
        .header__.text-right
          v-btn(color="red accent-4" outlined @click="exit()").ma-1 Exit
      section.choice
        v-radio-group.choice__(v-model="choiceBlock" row)
          v-radio(v-for="(item, index) in blocksName" :key="index" :label="item" color="red" :value="item")
      section.blocks
        .blocks__(v-for="(item, index) in blocks")
          .blocks__control.control
            v-btn(color="black" dark icon @click="duplicate(index)").control__.control__duplicate
              v-icon mdi-content-copy
            v-btn(color="black" dark icon @click="remove(index)").control__.control__remove
              v-icon mdi-delete
            v-btn(color="black" dark icon @click="swap(index, 1)").control__.control__down
              v-icon mdi-arrow-down
            v-btn(color="black" dark icon @click="swap(index, -1)").control__.control__up
              v-icon mdi-arrow-up
          component(:is="item.name" @v-changed="item.data = $event, log($event, item)")
      .text-center
        v-btn(color="black" dark @click="addBlock()").ma-1.align-center Add block
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
    pageID () { return this.$route.params.pageID }
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
      const xxx = setInterval(() => {
        console.log('save')
      }, 1000)
      setTimeout(() => { clearInterval(xxx) }, 5000)
    },
    saveAndExit () {
      this.save()
      this.exit()
    },
    exit () {
      this.back()
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
  min-height: 100vh
  position: relative
  display: flex
  justify-content: center
  align-items: center
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
  position: absolute
  top: 1em
  right: 1em
  &__
</style>
