<template lang="pug">
  v-form(ref='form' v-model='valid' lazy-validation)
    v-text-field(v-model='name' :counter='"16"' :rules='nameRules' label='Name')
    v-text-field(v-model='email' :rules='emailRules' label='E-mail' required)
    v-text-field(v-model='password' :rules='passwordRules' label='Password' required
      :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="showPass = !showPass"
      :type="showPass ? 'text' : 'password'"
      )
    v-text-field(v-model='confirmPassword' :rules='[confirmPasswordRules,passMatches]' type='password' label='Confirm password' required)
    v-btn(color='error' @click='reset').ma-1 Reset Form
    //v-btn(color='warning' @click='resetValidation') Reset Validation
    v-btn(:disabled='!valid' @click="submit").ma-1 Login
    v-spacer
</template>

<script>
export default {
  name: 'SignUp',
  data: () => ({
    valid: false,
    name: '',
    nameRules: [
      v => (v.length <= 16) || 'Name must be less than 16 characters'
    ],
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
    ],
    confirmPassword: '',
    confirmPasswordRules: v => !!v || 'Password is required'
  }),
  computed: {
    passMatches () {
      return () => (this.password === this.confirmPassword) || 'Password must match'
    }
  },
  methods: {
    validate () {
      return !!this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
    submit () {
      if (this.validate()) {
        this.$store.dispatch('signUp', { name: this.name, email: this.email, password: this.password })
      }
    }
  }
}
</script>

<style scoped lang="sass"></style>
