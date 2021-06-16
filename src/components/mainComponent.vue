<template>
  <div>
    <choose 
      :prop-site='siteProp' 
      :func-ok='choosePage' 
      :func-remove='removePage' 
      :func-create='openCreatePopup'/>
    <builder 
      :site='siteProp' 
      :lang='lang' 
      :type='type' 
      :id='id' 
      :filestore='filestore'
      :prop-list-components='listComponents'/>
    <v-dialog v-model="modal" max-width="500px" scrollable>
      <v-card>
        <v-toolbar card dark color="primary">
            <v-btn icon dark @click="modal = false">
                <v-icon>close</v-icon>
            </v-btn>
            Создание новой страницы
        </v-toolbar>
        <v-card-text>
          <create 
            :func-ok='createPage' 
            :prop-site='createSite' 
            :prop-lang='createLang' 
            :prop-category='createType' 
            :settings='createSettings'/>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>


<script>
import builder from '@/components/builder.vue'
import choose from '@/components/choose.vue'
import create from '@/components/create.vue'
export default {
  props: {
    listComponents: {default: () => {}}, 
    siteProp: {default: ''},
    filestore:  {default: ''}
  },
  data() {
    return {
      site: '',
      lang: '',
      type: '',
      id: '',
      modal: false,
      createSite: '',
      createLang: '',
      createType: '',
      createSettings: {}
    }
  },
  created() {
    this.site = this.propSite
  },
  components: {
      builder,
      choose,
      create
  }, 
  methods: {
    choosePage(site, lang, type, id) {
      this.site = site
      this.lang = lang
      this.type = type
      this.id = id
    },
    removePage(site, lang, type, id, settings) {
      let isReady = confirm("Точно удалить эту страницу?");
      if (isReady) {
          let setItem = JSON.parse(JSON.stringify(settings))
          delete setItem[lang][type][id]
          console.log(setItem)

          this.$db.collection(''+site).doc('collections').set(setItem).then(() => {
              this.$db.collection(''+site).doc(''+lang).collection(''+type).doc(""+id).delete().then(() => alert('Страница удалена безвозвратно!'))
          })
      }
      
    },
    openCreatePopup(settings, site, lang, category) {
      console.log(settings, site, lang, category)
      this.createSite = site
      this.createLang = lang
      this.createType = category
      this.createSettings = settings
      this.modal = true
    },
    createPage(site, lang, type, id) {
      this.createSite = ''
      this.createLang = ''
      this.createType = ''
      this.createSettings = {}
      this.site = site
      this.lang = lang
      this.type = type
      this.id = id
      this.modal = false
    }
  }
}
</script>

<style scoped lang='scss'>

</style>