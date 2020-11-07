<template>
<div class="container">
  <form class="form">
    <input class="form-control" placeholder="Search" v-model="searchText" />
    <small class="form-text text-muted">Enter a name to search from the list of Distributions</small>
  </form>
  <DistroList :distros="distros" />
</div>
</template>

<script>
import DistroList from "../components/DistroList.vue";
export default {
  name: 'Home',
  components: {
    DistroList
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed:{
    distros(){
      return this.$root.$data.distros.filter(distro => distro.name.toLowerCase().search(this.searchText) >= 0);
    }
  }
}
</script>

<style scoped>
.container{
  margin-bottom: 60px;
}

.header{
  text-align: center;
  font-size: 3.5em;
}

.centered{
  text-align: center;
}
</style>
