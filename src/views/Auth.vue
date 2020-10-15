<template lang="pug">
  .auth
    v-card.authCard.elevation-12
      v-toolbar(elevation="5" dark flat)
        v-tabs(centered grow v-model="tabs")
          v-tab(href="#tab-1") Log In
          v-tab(href="#tab-2") Sign Up
      v-card-text
        v-tabs-items(v-model='tabs')
          v-tab-item(value='tab-1')
            LogIn
          v-tab-item(value='tab-2')
            SignUp
</template>

<script>
import LogIn from '@/components/LogIn'
import SignUp from '@/components/SignUp'
export default {
  name: 'Auth',
  components: { LogIn, SignUp },
  data: () => ({
    tabs: 'tab-1'
  })
}
</script>

<style scoped lang='sass'>
.auth
  height: 100%
  width: 100%
  display: flex
  align-items: center
  justify-content: center
.authCard
  max-width: 95%
  min-width: 70%
</style>
