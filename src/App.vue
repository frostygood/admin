<template>
  <v-app>
    <app-header />
    <router-view />
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

