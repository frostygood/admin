<template>
  <div>
    <div 
      v-for='(item, i) in obj' :key='i'
      class="">
      <wrapper :strings='strings' :obj='item'/>
      <div style="display: flex">
        <v-btn small dark color="green" @click.prevent="obj[i].edit = true">Edit</v-btn>
        <v-btn small color="error" @click.prevent='deleteComponent(i)'>Delete</v-btn>
      </div>

      <v-dialog
        v-model="obj[i].edit"
        persistent max-width="900px" scrollable>
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
      @click.prevent="addComponent('cont', listComponents, strings)"
      fab dark color="indigo" 
      style="display: block; margin: 0 auto;">
      <v-icon dark>add</v-icon>
    </v-btn>
  </div>
</template>


<script>
import testdata from '@/components/test/test.json'
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
    this.strings = testdata.strings
    this.obj = testdata.obj
    this.listComponents = testcomponent
  },
  methods: {
    closePopup(i) {
      this.obj[i].edit = false
    },
    deleteComponent(i) {
      this.obj.splice(i, 1);
    },
    addComponent(nameComponent, listComponents, strings) {
      let idComponent = nameComponent + Date.now()
      let addingComponent = JSON.parse(JSON.stringify(listComponents.find(item => item.name === nameComponent)))
      addingComponent['id'] = idComponent
      for (let key in addingComponent.props.string) {
        addingComponent.props.string[key] = idComponent + '_string_' + key
        strings[idComponent + '_string_' + key] = 'default'
      }
      for (let key in addingComponent.props.editor) {
        addingComponent.props.editor[key] = idComponent + '_editor_' + key
        strings[idComponent + '_editor_' + key] = 'default'
      }
      this.obj.push(addingComponent)
      console.log(this.obj)
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