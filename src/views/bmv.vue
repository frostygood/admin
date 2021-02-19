<template>
  <div><br><br><br>
    <choose prop-site='bmv' :func-ok='choosePage'/>
    <builder :site='site' :lang='lang' :type='type' :id='id'/>
  </div>
</template>


<script>
import builder from '@/components/builder.vue'
import choose from '@/components/choose.vue'
export default {
  data() {
    return {
      site: '',
      lang: '',
      type: '',
      id: ''
    }
  },
  components: {
      builder,
      choose
  }, 
  methods: {
    choosePage(site, lang, type, id) {
      this.site = site
      this.lang = lang
      this.type = type
      this.id = id
    }
  }
}
</script>

<style scoped lang='scss'>

</style>