<template lang="pug">
  v-form(ref='form' v-model='valid' lazy-validation)
    v-text-field(v-model='email' :rules='emailRules' label='E-mail' required)
    v-text-field(v-model='password' :rules='passwordRules' label='Password' required
      :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPass = !showPass"
        :type="showPass ? 'text' : 'password'"
      )
    p.subtitle-1.text-center.red--text.text--accent-4(v-if="error") {{error}}
    v-btn(color='error' @click='reset').ma-1 Reset Form
    //v-btn(color='warning' @click='resetValidation') Reset Validation
    v-btn(color='default' :disabled='!valid' @click="login").ma-1 Login
    v-spacer
</template>

<script>
export default {
  name: 'LogIn',
  data: () => ({
    valid: true,
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    password: '',
    showPass: false,
    passwordRules: [
      v => !!v || 'Password is required',
      v => (v && v.length >= 8 && v.length <= 128) || 'Password must be more than 8 characters and less than 128 characters'
    ]
  }),
  computed: {
    error () { return this.$store.getters.error }
  },
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        return true
      }
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
    login () {
      if (this.validate()) {
        this.$store.dispatch('logIn', { email: this.email, password: this.password })
      }
    }
  }
}
</script>

<style scoped lang="sass"></style>
