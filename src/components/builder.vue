<template>
  <div v-if='id'>
    <v-btn @click.prevent="savePage()">Save</v-btn>
    <v-btn @click="modal = true">Metatags & url page</v-btn>
    <v-dialog v-model="modal" max-width="500px" scrollable>
      <v-card>
        <v-toolbar card dark color="primary"><v-btn icon dark @click="modal = false"><v-icon>close</v-icon></v-btn></v-toolbar>
        <v-card-text>
          <v-text-field v-model="name" label="Name Page"></v-text-field>
          <v-text-field v-model="title" label="Title Page"></v-text-field>
          <v-text-field v-model="description" label="Description Page"></v-text-field>
          <v-text-field v-model="img" label="Url img Page"></v-text-field>
          <div>
            <v-text-field v-model="path" :label="'www.' + site + '.ru/'+type+'/'"></v-text-field>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
    <div v-for='(item, i) in obj' :key='i'>
      <wrapper :strings='strings' :obj='item' :site='site'/>
      <div style="display: flex">
        <v-btn small dark color="orange" @click.prevent="obj.splice(i+1, 0, createComponent('cont'))">add new block below</v-btn>
        <v-btn style="margin-right: auto;" small dark color="green" @click.prevent="obj[i].edit = true">Edit</v-btn>
        <v-btn v-show="i > 0" small dark color="blue" @click.prevent="switchComponents(i-1, i)">up</v-btn>
        <v-btn v-show="obj.length-1 > i" small dark color="blue" @click.prevent="switchComponents(i, i+1)">down</v-btn>
        <v-btn small color="error" @click.prevent='deleteComponent(i)'>Delete</v-btn>
      </div>
      <v-dialog
        v-model="obj[i].edit" max-width="900px" scrollable>
        <v-card tile>
          <v-toolbar card dark color="primary"><v-btn icon dark @click="obj[i].edit = false"><v-icon>close</v-icon></v-btn></v-toolbar>
          <v-card-text>
            <h3>Checkboxes</h3>
            <v-switch v-for="(elem, b) in item.props.boolean" :key="b" 
            style="display: inline-block; margin-right: 30px;"
            v-model="obj[i].props.boolean[b]" :label="`Switch 1`"></v-switch>
            <h3 style='margin-top: 30px;'>Strings</h3>
            <v-text-field
              v-for="(elem, s) in item.props.string" :key="s" 
              v-model="strings[obj[i].props.string[s]]"
              label="Placeholder">
            </v-text-field>
            <h3 style='margin-top: 30px;'>Texts</h3>
            <editor v-for="(elem, e) in item.props.editor" :key="e" 
              v-model="strings[elem]">
            </editor>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
    <v-btn 
      v-show="obj.length == 0"
      @click.prevent="obj.push(createComponent('cont'))"
      fab dark color="indigo" 
      style="display: block; margin: 0 auto;">
      <v-icon dark>add</v-icon>
    </v-btn>
  </div>
</template>

<script>
import editor from '@/components/editor.vue'
export default {
  props: {
    site: {default: 'bmv'},
    lang: {default: 'ru'},
    type: {default: 'simple'},
    id: {default: 'bmv_ru_simple_213412512'},
    propListComponents: {default: () => {}}
  },
  data: function () {
      return { 
        modal: false,
        loading: false,
        listComponents: [],
        strings: {},
        obj: [],
        path: '',
        title: '',
        description: '',
        img: '',
        name: '',
      }
  },
  mounted() {
    if (this.site) {
      this.getComponents()
      this.getPage() 
    }
  },
  watch: {
    site: {handler: function () { 
        this.getPage()
        this.getComponents()
      }
    },
    lang: {handler: function () { 
        this.getPage()
      }
    },
    type: {handler: function () { 
        this.getPage()
      }
    },
    id: {handler: function () { 
        this.getPage()
      }
    },
  },
  methods: {
    getComponents() {
      this.listComponents = this.propListComponents
    },
    savePage: async function() {
      let item = {
        page: this.obj.slice(),
        strings: JSON.parse(JSON.stringify(this.strings)),
        title: this.title,
        path: this.path,
        description: this.description,
        img: this.img,
        id: this.id,
        name: this.name
      }
      this.$db.collection(''+this.site).doc(''+this.lang).collection(''+this.type).doc(""+this.id).set(item).then(function() {
          alert("Сохранено")
        });
    },
    async getPage() {
      await this.$db.collection(''+this.site).doc(''+this.lang).collection(''+this.type).doc(""+this.id).get()
        .then((doc) => {
          if (doc.exists) {
              console.log("Document data:", doc.data());
              this.strings = doc.data().strings
              this.obj = doc.data().page
              this.path = doc.data().path
              this.title = doc.data().title
              this.description = doc.data().description
              this.img = doc.data().img
              this.name = doc.data().name
          } else {
              console.log("No such document!");
          }
      }).catch(function(error) {
          console.log("Error getting document:", error);
      });
    },
    switchComponents(i, n) {
      let tmp = this.obj[i];
      this.obj[i] = this.obj[n];
      this.obj[n] = tmp;
      this.$forceUpdate()
    },
    deleteComponent(i) {
      for (let key in this.obj[i].props.string) delete this.strings[this.obj[i].props.string[key]]
      for (let key in this.obj[i].props.editor) delete this.strings[this.obj[i].props.editor[key]]
      this.obj.splice(i, 1);
    },
    createComponent(nameComponent) {
      let idComponent = nameComponent + Date.now()
      let addingComponent = JSON.parse(JSON.stringify(this.listComponents.find(item => item.name === nameComponent)))
      addingComponent['id'] = idComponent
      for (let key in addingComponent.props.string) {
        addingComponent.props.string[key] = idComponent + '_string_' + key
        this.strings[idComponent + '_string_' + key] = 'default'
      }
      for (let key in addingComponent.props.editor) {
        addingComponent.props.editor[key] = idComponent + '_editor_' + key
        this.strings[idComponent + '_editor_' + key] = 'default'
      }
      return addingComponent
    },
  },
  components: {
    editor, 
    'wrapper': () => import('@/components/wrapperComponent.vue')
  }
}
</script>

<style scoped lang='scss'>

</style>