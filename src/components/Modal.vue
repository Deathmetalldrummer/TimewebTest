<template lang="pug">
v-dialog(v-model='dialog' scrollable :max-width='width || 290')
  v-card
    v-card-title.headline {{title}}
    v-card-text
      slot
    v-card-actions
      v-spacer
      v-btn(color='red accent-4' text @click='submit(false)')
        | Disagree
      v-btn(color='light-green accent-3' text @click='submit(true)')
        | Agree
</template>

<script>
export default {
  name: 'Modal',
  props: ['model', 'title', 'width'],
  data () {
    return {
      message: 'Слава Одину, Modal работает!'
    }
  },
  computed: {
    dialog: {
      get () { return this.$props.model },
      set (value) { this.submit(value) }
    }
  },
  methods: {
    submit (value) {
      this.$emit('submit', value)
    }
  }
}
</script>

<style scoped lang="sass"></style>
