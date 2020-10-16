<template lang="pug">
.text
  Editable(v-model="text" @changed="submit")
</template>

<script>
import Editable from '@/components/Editable'
export default {
  name: 'TextComponent',
  components: {
    Editable
  },
  props: ['data'],
  data () {
    return {
      message: 'Слава Одину, TextComponent работает!',
      text: this.$props.data || 'Слава Одину, TextComponent работает!'
    }
  },
  mounted () {
    this.submit()
  },
  methods: {
    submit ($event) {
      this.$emit('v-changed', this.text)
    }
  }
}
</script>

<style scoped lang="sass">
.text
  padding: 15vh 20%
</style>
