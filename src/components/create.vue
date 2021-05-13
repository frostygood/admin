<template>
<div>
  <v-text-field 
    v-model="path" 
    @change="delSpaceUrl()"
    :label="'Напишите url новой страницы - ' + (propLang=='en' ? 'www' : propLang ) + '.' + propSite + '.com/'+propCategory+'/'"/>
  <p>На основе какой страницы создать новую (если ничего не выбрать, то будет создана пустая страница)</p>
  <v-select
      :items="Object.keys(settings)"
      v-model='lang'
      label="Language (язык)">
  </v-select>
  <v-select
      v-if="lang"
      :items="Object.keys(settings[lang])"
      v-model='type'
      label="Category (категория)">
  </v-select>
  <v-select
      v-if='type'
      item-text="1"
      item-value="0"
      :items="Object.entries(settings[lang][type])"
      v-model='id'
      label="Page (страница)">
  </v-select>
  <v-btn :disabled="!path" fab small dark color="orange" 
    @click.prevent="createFunc(propSite, propLang, propCategory, path)">
      <v-icon dark>add</v-icon>
  </v-btn>
</div>  
</template>

<script>
export default {
    props: {
        propSite: {default: ''},
        propLang: {default: ''},
        propCategory: {default: ''},
        settings: {type: Object, default: () => {}},
        funcOk: {type: Function}
    },
    data() {
        return {
            path: '',
            lang: '',
            type: '',
            id: '',
            copiPage: {
              title: '',
              path: '',
              description: '',
              img: '',
              id: '',
              active: false,
              page: [],
              strings: {}
            }
        }
    },
    watch: {
      id: {handler: function () {
          if (this.id) this.getPage()
        }
      },
    },
    methods: {
      createFunc(site, lang, type, path) {
        if (this.funcOk) {
          let id = site + '_' + lang + '_' + type + '_' + Date.now()

          let item = this.basePage(this.copiPage)
          item.path = path
          item.id = id
          let setItem = JSON.parse(JSON.stringify(this.settings))
          setItem[lang][type][id] = path

          console.log(item, setItem[lang][type])

          this.$db.collection(''+site).doc(''+lang).collection(''+type).doc(""+id).set(item).then(() => {
            this.$db.collection(''+site).doc('collections').set(setItem).then(() => {
              this.funcOk(site, lang, type, id)
              this.resetChoose()
            })
          });
        }
        else console.log('не передана action функция')
      },
      basePage(obj) {
        return {
          title: obj.title,
          path: obj.path,
          description: obj.description,
          img: obj.img,
          id: obj.id,
          active: obj.active,
          page: obj.page,
          strings: obj.strings
        }
      },
      delSpaceUrl() {
        let thisApp = this;
        this.path = this.path.replace(/[^\w\d]/g, '-').toLowerCase();
        console.log(Object.values(this.settings[this.propLang][this.propCategory]))
        Object.values(this.settings[this.propLang][this.propCategory]).forEach(function(url) {
            if (url == thisApp.path) {
              alert('This url is already in use! / Такой url уже используется!');
              thisApp.path = thisApp.path + "_" + Date.now()
            };
          });
      },
      async getPage() {
        await this.$db.collection(''+this.propSite).doc(''+this.lang).collection(''+this.type).doc(""+this.id).get()
          .then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());

                this.copiPage.title = doc.data().title
                this.copiPage.path = ''
                this.copiPage.description = doc.data().description
                this.copiPage.img = doc.data().img
                this.copiPage.id = ''
                this.copiPage.active = false
                this.copiPage.page = doc.data().page
                this.copiPage.strings = doc.data().strings

            } else {
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
      },
      resetChoose() {
        this.path = ''
        this.lang = ''
        this.type = ''
        this.id = ''
        this.copiPage.title = ''
        this.copiPage.path = ''
        this.copiPage.description = ''
        this.copiPage.img = ''
        this.copiPage.id = ''
        this.copiPage.active = false
        this.copiPage.page = []
        this.copiPage.strings = {}
      }
    }
}
</script>

<style>

</style>