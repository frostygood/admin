<template>
    <component 
        :is='site + "-" + obj.name'
        v-bind="{...mapBool, ...mapEditor, ...mapStrings}"/>
</template>

<script>
export default {
  data: function () {
      return { 
            mapBool: {},
            mapEditor: {},
            mapStrings: {}
      }
  },
  mounted() {
      this.mapProps();
  },
  watch: {
      obj: {
        handler: function () { 
            this.mapProps();
        },
        deep: true
    },
  },
  methods: {
      mapProps() {
          this.mapBool = {}
          for (let key in this.obj.props.boolean) this.mapBool[key] = this.obj.props.boolean[key]
          this.mapStrings = {}
          for (let key in this.obj.props.string) this.mapStrings[key] = this.strings[this.obj.props.string[key]]
          this.mapEditor = {}
          for (let key in this.obj.props.editor) this.mapEditor[key] = this.strings[this.obj.props.editor[key]]
      }
  },
  props: {
        obj: {
            type: Object,
            default: () => {}
        },
        strings: {
            type: Object,
            default: () => {}
        },
        site: {
            type: String,
            default: 'bmv'
        },
  }
}
</script>

<style>

</style>