<template>
  <div id="app">
<AppAside></AppAside>
  </div>
</template>
<script>
  import aside from './asidebar.vue';
  export default {
    data(){
      return {
        count: 0
      };
    },
    components: {
      AppAside: aside
    }
  }
</script>
<style lang="sass">
@import './assets/style/global.sass'

body
  font-family: Lato

button
  font-family: Lato

</style>
