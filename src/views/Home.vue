<template lang="pug">
  .home
    v-btn(color="black" dark @click="link()") Open App
    br
    v-btn(color="black" dark @click="logout()") Log Out
</template>

<script>

export default {
  name: 'Home',
  methods: {
    logout () {
      this.$store.dispatch('logOut')
    },
    link () {
      this.$router.push({ name: 'projects' })
    }
  }
}
</script>
<style lang="sass">
.home
  width: 100vw
  height: 100vh
  overflow: hidden
  display: flex
  flex-flow: column nowrap
  justify-content: center
  align-items: center
</style>
