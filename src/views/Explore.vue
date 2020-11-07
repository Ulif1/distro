<template>
<div class="container">
  <div class="">
    <h3 class="centered">Apps created with Linux!</h3>
    <AppList :apps="apps"></AppList>
  </div>
</div>
</template>

<script>
import AppList from "../components/AppList.vue";
export default{
  name: "explore",
  components: {
    AppList
  },
  computed: {
    apps(){
      return this.$root.$data.apps;
    }
  }
}
</script>

<style scoped>
.centered{
  text-align: center;
}
.container{
  margin-bottom: 60px;
}
</style>
