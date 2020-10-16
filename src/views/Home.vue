<template lang="pug">
  .home
    v-btn(color="black" dark @click="link()").ma-3 Open App
    v-btn(color="black" dark @click="logout()").ma-3 Log Out
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
