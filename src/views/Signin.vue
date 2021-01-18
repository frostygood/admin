<template>
  <v-container
    fluid
    fill-height
  >
    <v-layout
      align-center
      justify-center
    >
      <v-flex
        xs12
        sm8
        md6
      >
        <v-card class="elevation-12">
          <v-toolbar
            dark
            class="purple"
          >
            <v-toolbar-title>Вход</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-alert
              :value="error"
              type="warning"
            >
              {{ error }}
            </v-alert>
            <v-form v-model="valid">
              <v-text-field
                v-model="email"
                prepend-icon="person"
                name="Email"
                label="Email"
                type="text"
                required
                :rules="emailRules"
              />
              <v-text-field
                id="password"
                v-model="pass"
                prepend-icon="lock"
                name="password"
                label="Password"
                type="password"
                required
                :rules="passRules"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="primary"
              :disabled="processing || !valid"
              @click.prevent="signin"
            >
              Войти
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  data() {
    return{
      email: null,
      pass: null,
      valid: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      passRules: [
        v => !!v || 'Введите пароль',
        v => (v && v.length >=6 ) || 'минимум 6 символов'
      ]
    }
  },
  computed: {
    error(){
      return this.$store.getters.getError
    },
    processing(){
      return this.$store.getters.getProcessing
    },
    isAuth(){
      return this.$store.getters.isAuth
    }
  },
  watch: {
    isAuth(val){
      if (val === true) {
        this.$router.push('/');
      }
    }
  },
  methods: {
    signin() {
      
      this.$store.dispatch('SIGNIN', {email: this.email, password: this.pass})
    }
  }
}
</script>

<style scoped>

</style>