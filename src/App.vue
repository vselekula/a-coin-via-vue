<template>
<div id="app">
  <AppHeader></AppHeader>
  <AppWallPosts></AppWallPosts>
  <AppAside></AppAside>
</div>
</template>
<script>
  import aside from './asidebar.vue';
  import header from './header.vue';
  import wallPosts from './wallPosts.vue';
  export default {
    data(){
      return {
        count: 0,
      };
    },
    components: {
      AppAside: aside,
      AppHeader: header,
      AppWallPosts: wallPosts
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
