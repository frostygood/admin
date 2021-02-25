<template>
<div>
  <v-text-field 
    v-model="path" 
    @change="delSpaceUrl()"
    :label="'Напишите url новой страницы - ' + (propLang=='en' ? 'www' : propLang ) + '.' + propSite + '.com/'+propCategory+'/'"/>
  <v-btn fab small dark color="orange" 
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
        }
    },
    methods: {
      createFunc(site, lang, type, path) {
        if (this.funcOk) {
          let id = site + '_' + lang + '_' + type + '_' + Date.now()

          let item = this.basePage()
          item.path = path
          item.id = id
          let setItem = JSON.parse(JSON.stringify(this.settings))
          setItem[lang][type][id] = path

          console.log(item, setItem[lang][type])

          this.$db.collection(''+site).doc(''+lang).collection(''+type).doc(""+id).set(item).then(() => {
            this.$db.collection(''+site).doc('collections').set(setItem).then(() => {
              this.funcOk(site, lang, type, id)
              this.path = ''
            })
          });
        }
        else console.log('не передана action функция')
      },
      basePage() {
        return {
          title: '',
          path: '',
          description: '',
          img: '',
          id: '',
          active: false,
          page: [],
          strings: {}
        }
      },
      delSpaceUrl() {
        let thisApp = this;
        this.path = this.path.replace(/[^\w\d]/g, '_').toLowerCase();
        console.log(Object.values(this.settings[this.propLang][this.propCategory]))
        Object.values(this.settings[this.propLang][this.propCategory]).forEach(function(url) {
            if (url == thisApp.path) {
              alert('This url is already in use! / Такой url уже используется!');
              thisApp.path = thisApp.path + "_" + Date.now()
            };
          });
      },
    }
}
</script>

<style>

</style>