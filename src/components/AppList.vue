<template>
<div class="row centered justify-content-center">
  <div v-for="a in apps" :key="a.id">
    <div class="info">
      <h4>{{a.app}}</h4>
      <p>Publisher: {{a.company}}</p>
      <a :href="'http://www.'+a.app+'.com'">Link to Site</a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'AppList',
  props: {
    apps: Array
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
