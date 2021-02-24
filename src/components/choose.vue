<template>
<div>
    <v-btn @click="modal = true" style="float: right;">{{btn}}</v-btn>
    <v-dialog v-model="modal" max-width="500px" scrollable>
      <v-card>
        <v-toolbar card dark color="primary">
            <v-btn icon dark @click="modal = false">
                <v-icon>close</v-icon>
            </v-btn>
            {{text}}
        </v-toolbar>
        <v-card-text>
          <v-select
            :items="languageArray"
            v-model='language'
            :loading='languageLoading'
            :disabled="languageBlock"
            label="language (язык)">
          </v-select>
          <v-select
            v-if='language'
            :items="categoryArray"
            v-model='category'
            :loading='categoryLoading'
            :disabled="categoryBlock"
            label="Category (категории)">
          </v-select>
          <v-select
            v-if='category'
            item-text="1"
            item-value="0"
            :items="pageArray"
            v-model='page'
            :loading='pageLoading'
            :disabled="pageBlock"
            label="Page (страница)">
          </v-select>
          <v-btn 
            @click.prevent='actionFunc(site, language, category, page)'
            v-if='site && language && category && page'>OK</v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
</div>  
</template>

<script>
export default {
    props: {
        propSite: {default: 'bmv'},
        propLang: {default: ''},
        propCategory: {default: ''},
        propPage: {default: ''},
        btn: {default: 'Choose page'},
        text: {default: 'Choose page (выбрать страницу для редактирования)'},
        funcOk: {type: Function}
    },
    data() {
        return {
            site: '',
            settings: {},
            pageArray: [],
            page: '',
            pageLoading: false,
            pageBlock: false,
            categoryArray: [],
            category: '',
            categoryLoading: false,
            categoryBlock: false,
            languageArray: [],
            language: '',
            languageLoading: false,
            languageBlock: false,
            modal: false,
        }
    },
    mounted() {
      this.getProps()
    },
    watch: {
      propSite: {handler: function () {
          this.getProps()
        }
      },
      language: {handler: function () {
          this.getCategory()
          this.category = ''
          this.page = ''
          this.pageArray = []
        }
      },
      category: {handler: function () {
          if (this.category) this.getPages()
        }
      },
      modal: {handler: function () {
          if (this.modal && !this.site) this.getPages()
        }
      },
    },
    methods: {
      async getProps() {
        if (this.propSite) {
          this.site = this.propSite
          await this.$db.collection(''+this.site).doc('collections').get()
            .then((doc) => {
              console.log("Document data:", doc.data());
              this.settings = doc.data()

              if (this.propLang) {
                // если lang пришел в props, то заморозить поле и заблокировать выбор другого варианта
                this.language = this.propLang
                this.languageBlock = true
              } else {
                this.language = ''
                this.languageBlock = false
                this.getLangs()
              }

              if (this.propCategory) {
                this.category = this.propCategory
                this.categoryBlock = true
              } else {
                this.category = ''
                this.categoryBlock = false
              }
              
              if (this.propPage) {
                this.page = this.propPage
                this.pageBlock = true
              } else {
                this.page = ''
                this.pageBlock = false
              }

          }).catch(function(error) {
              console.log("Error getting document:", error);
              alert('Error')
          });
        }
      },
      getLangs() {
        this.languageArray = Object.keys(this.settings)
        this.language = ''
        this.category = ''
        this.page = ''
      },
      getCategory() {
        //console.log(Object.keys(this.settings[this.language]))
        if (this.language) this.categoryArray = Object.keys(this.settings[this.language])
        else this.categoryArray = []
      },
      getPages() {
        //console.log(Object.entries(this.settings[this.language][this.category]))
        if (this.category) this.pageArray = Object.entries(this.settings[this.language][this.category])
        else this.pageArray = []
      },
      actionFunc(site, lang, category, page) {
        if (this.funcOk) {
          this.funcOk(site, lang, category, page)
          this.defaultData()
          this.modal = false
        }
        else console.log('не передана action функция')
      },
      defaultData() {
          this.site = ''
          this.settings = {}
          this.pageArray = []
          this.page = ''
          this.pageLoading = false
          this.pageBlock = false
          this.categoryArray = []
          this.category = ''
          this.categoryLoading = false
          this.categoryBlock = false
          this.languageArray = []
          this.language = ''
          this.languageLoading = false
          this.languageBlock = false
      }
    }
}
</script>

<style>

</style>