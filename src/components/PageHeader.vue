<template lang="pug">
  .pages.mt-5
    .pages__back
      v-btn(text @click="$emit('back')")
        v-icon mdi-arrow-left
        span.ml-2 Back
    .pages__header
      h1.header-2.ml-4 {{title}}
      v-spacer
      v-btn(text @click="$emit('add')")
        v-icon mdi-plus
        span.ml-1 {{actionAddText}}
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    title: {
      type: String,
      required: true
    },
    actionAddText: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      message: 'Слава Одину, PageHeader работает!'
    }
  }
}
</script>

<style scoped lang="sass">
.pages__header
  display: flex
  justify-content: space-between
  align-items: center
</style>
