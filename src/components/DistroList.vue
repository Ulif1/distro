<template>
<div class="container-fluid">
  <div v-if="distros.length > 0">
    <div class="container-fluid" v-for="distro in distros" :key="distro.id">
      <div class="info">
        <h1 style="display:inline">{{distro.name}}   </h1>
        <img class="img-fluid icon" :src="'/images/distro_image/'+distro.img"/>
        <p>{{distro.description}}</p>
        <a class="btn bg-light" :href="distro.site">{{distro.site}}</a>
      </div>
    </div>
  </div>
  <div v-else>
    <h2>No Results</h2>
  </div>
</div>
</template>

<script>
export default {
  name: 'DistroList',
  props: {
    distros: Array
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style scoped>
.info{
  background-color: #aaaaaa15;
  border-radius: 15px;
  margin: 5px;
  padding: 10px;
}

.icon{
  height: 50px;
  width: 50px;
  display: inline;
}
</style>
