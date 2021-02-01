<template>
  <div>
    <div 
      v-for='(item, i) in obj' :key='i'
      class="">
      <wrapper :strings='strings' :obj='item'/>
      <a href="#" @click.prevent='edit'>Edit</a>
    </div>
  </div>
</template>


<script>
import wrapper from '@/components/wrapperComponent.vue'
import editor from '@/components/editor.vue'
export default {
  data: function () {
      return { 
        strings: {
          cont1234: 'тюп-тюп',
          cont4321: '<p>testa</p>',
          cont5678: 'оп, давай-давай',
          cont9876: '<p>ywerc</p>'
        },
        obj: [
          {
            name: 'cont',
            position: 1,
            props: {
              boolean: {
                bool: false
              },
              string: { 
                str: 'cont1234'
              },
              editor: {
                texts: 'cont4321'
              }
            }
          },
          {
            name: 'cont',
            position: 2,
            props: {
              boolean: {
                bool: true
              },
              string: { 
                str: 'cont5678'
              },
              editor: {
                texts: 'cont9876'
              }
            }
          }
        ],
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