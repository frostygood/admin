<template>
<div class='wrapper'>
  <main-component site-prop='bmv' :list-components='json' filestore="https://firebasestorage.googleapis.com/v0/b/bmven-a02bd.appspot.com/o/bmv%2F"/>
</div>
</template>


<script>
import json from '/src/json/bmv.json'
import mainComponent from '@/components/mainComponent.vue'
export default {
  data() {
    return {
      json: json
    }
  },
  created() {
    console.log(json)
  },
  components: {
      mainComponent
  }, 
}
</script>

<style scoped lang='scss'>
.wrapper {
	display: block;
	position: relative;
	margin: 0 auto;
	max-width: 1110px;
	width: 100%;
	box-sizing: border-box;

	@media (max-width: 1149px) {
		max-width: 732px;
	}
	@media (max-width: 767px) {
		max-width: 100%;
		padding-left: 20px;
		padding-right: 20px;
	}
}
</style>