<template>
<div>
  <p>главная</p>
  <router-link
    to="/bmv"
    tag="a"
    style="cursor:pointer;">
              bmvcompany
  </router-link>
</div>
</template>


<script>
export default {
  data() {
    return {
      site: 'bmv'
    }
  },
  created() {
    console.log(this.site)
    this.$db.collection('bmv').doc('collections').get().then((doc) => {
      console.log("Document data:", doc.data());
    }).catch(function(error) {
        console.log(error);
    });
  },
  components: {
  }, 
}
</script>

<style scoped lang='scss'>

</style>