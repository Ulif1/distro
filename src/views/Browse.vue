<template>
<div class="container">
  <h3 class="centered">--All Distros--</h3>
  <DistroList :showDesc="true" :distros="distros" />
</div>
</template>

<script>
import DistroList from "../components/DistroList.vue"
export default {
  name: 'Browse',
  components: {
    DistroList
  },
  data() {
    return {
      description: ''
    }
  },
  computed: {
    distros(){
      return this.$root.$data.distros;
    }
  },
  methods: {

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
