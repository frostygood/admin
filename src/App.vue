<template>
  <v-app>
    <app-header />
    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>
    <app-footer />
  </v-app>
</template>
<script>
import appHeader from '@/components/header.vue'
import appFooter from '@/components/footer.vue'

export default {
  components: {
    appHeader,
    appFooter
  }
}
</script>

