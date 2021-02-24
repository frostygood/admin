<template>
  <div>
    <choose :prop-site='site' :func-ok='choosePage'/>
    <builder :site='site' :lang='lang' :type='type' :id='id' :prop-list-components='listComponents'/>
  </div>
</template>


<script>
import builder from '@/components/builder.vue'
import choose from '@/components/choose.vue'
export default {
  props: {
    listComponents: {default: () => {}}, siteProp : {default: 'bmv'}
  },
  data() {
    return {
      site: '',
      lang: '',
      type: '',
      id: ''
    }
  },
  created() {
    this.site = this.propSite
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