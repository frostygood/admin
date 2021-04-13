<template>
    <component 
        :is='site + "-" + obj.name'
        v-bind="{...mapBool, ...mapEditor, ...mapStrings, ...mapLinks, ...mapImgs}"/>
</template>

<script>
export default {
  data: function () {
      return { 
            mapBool: {},
            mapEditor: {},
            mapStrings: {},
            mapLinks: {},
            mapImgs: {}
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
          this.mapLinks = {}
          for (let key in this.obj.props.links) this.mapLinks[key] = this.obj.props.links[key]
          this.mapImgs = {}
          for (let key in this.obj.props.imgs) this.mapLinks[key] = this.filestore + this.obj.props.imgs[key] + '?alt=media'
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
        filestore: {
            default: 'https://firebasestorage.googleapis.com/v0/b/smartcatpromoadmin.appspot.com/o/smartcat%2F'
        },
  }
}
</script>

<style>

</style>