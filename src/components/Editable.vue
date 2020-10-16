<template lang="pug">
div(contenteditable @input="onInput" ref="editable" v-html="text").editable
</template>

<script>
export default {
  name: 'Editable',
  props: {
    value: {
      type: String,
      default: '',
      throttling: null
    }
  },
  data () {
    return {
      text: this.$props.value
    }
  },
  methods: {
    onInput (e) {
      this.$emit('input', this.$refs.editable.innerHTML)
      clearTimeout(this.throttling)
      this.throttling = setTimeout(() => {
        this.$emit('changed', this.$refs.editable.innerHTML)
      }, 300)
    }
  }
}
</script>

<style scoped lang="sass">
.editable
  outline: none
</style>
