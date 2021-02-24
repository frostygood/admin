<template>
  <main-component site-prop='bmv' :list-components='json'/>
</template>


<script>
import json from '/src/json/bmv.json'
import mainComponent from '@/components/mainComponent.vue'
export default {
  data() {
    return {
      json: json
    }
  },
  created() {
    console.log(json)
  },
  components: {
      mainComponent
  }, 
}
</script>

<style scoped lang='scss'>

</style>