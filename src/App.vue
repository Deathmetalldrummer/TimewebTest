<template lang="pug">
  v-app#app
    Auth(v-if="!isAuth")
    router-view(v-else)
</template>

<script>
import Auth from '@/views/Auth'

export default {
  name: 'App',
  components: {
    Auth
  },
  data: () => ({
    //
  }),
  computed: {
    isAuth () { return !!this.$store.getters.currentUser }
  }
}
</script>
<style lang="sass">
@import "assets/sass/variable"
@import "assets/sass/mixin"
@import "assets/sass/global"
</style>
