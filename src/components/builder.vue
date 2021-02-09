<template>
  <div>
    <div 
      v-for='(item, i) in obj' :key='i'
      class="">
      <wrapper :strings='strings' :obj='item'/>
      <div style="display: flex">
        <v-btn small dark color="orange" @click.prevent="addComponent(i, createComponent('cont'))">add new block below</v-btn>
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
import testcomponent from '@/components/test/listComponents.json'
import wrapper from '@/components/wrapperComponent.vue'
import editor from '@/components/editor.vue'
export default {
  data: function () {
      return { 
        listComponents: [],
        strings: {},
        obj: [],
      }
  },
  created() {
    this.listComponents = testcomponent
  },
  methods: {
    closePopup(i) {
      this.obj[i].edit = false
    },
    addComponent(i, item) {
      this.obj.splice(i, 0, item);
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
    }
  },
  components: {
      editor,
      wrapper
  }

}
</script>

<style scoped lang='scss'>

</style>