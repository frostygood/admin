<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      right
      absolute
      temporary
    >
      <v-list>
        <v-list-tile
          v-for="item in menuItems" 
          v-if="isAuth === item.isAuth"
          :key="item.id"
        >                    
          <v-list-tile-action>
            <v-icon v-html="item.icon" />
          </v-list-tile-action>         
          <v-list-tile-content>
            <router-link
              :to="item.route"
              tag="span"
              style="cursor:pointer;"
            >
              <v-list-tile-title v-text="item.title" />
            </router-link>
          </v-list-tile-content>          
        </v-list-tile>
        <v-list-tile v-if="isAuth === true">
          <v-list-tile-content>
            <v-list-tile-title
              style="cursor:pointer;"
              @click.prevent="signout"
            >
              Выйти
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      dark
      class="purple"
    >
      <router-link
        to="/"
        tag="span"
        style="cursor:pointer;"
      >
        <v-toolbar-title>Admin</v-toolbar-title>
      </router-link>
      <v-spacer />
      <v-toolbar-side-icon
        @click.stop="drawer = !drawer"
      />
    </v-toolbar>
  </div>
</template>

<script>
export default {
    data() {
        return {
            drawer: false
        }
    },
    computed: {
        isAuth(){
            return this.$store.getters.isAuth
        },
        menuItems() {
            return [
                {
                    icon: "account_circle",
                    title: "Профиль",
                    route: "/profile",
                    isAuth: true
                },
                {
                    icon: "input",
                    title: "Войти",
                    route: "/signin",
                    isAuth: false
                },
                {
                    icon: "lock_open",
                    title: "Регистрация",
                    route: "/signup",
                    isAuth: false
                }
            ]
        }
    },
    methods: {
        signout() {
            this.$store.dispatch("SIGNOUT")
        }
    }
}
</script>

<style scoped>

</style>
