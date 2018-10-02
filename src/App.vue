<template>
<div id="app">
  <AppHeader></AppHeader>
  <vs-row class="posts-wrapper" vs-justify="center">
    <vs-col vs-w="3.5">
      <AppWallPosts></AppWallPosts>
    </vs-col>
    <vs-col vs-w="1.5">
      <AppShopPosts></AppShopPosts>
      <AppButtonAdd></AppButtonAdd>
    </vs-col>
  </vs-row>
  <AppAside></AppAside>
</div>
</template>
<script>
  import aside from './asidebar.vue';
  import header from './header.vue';
  import wallPosts from './wallPosts.vue';
  import shopPosts from './shopPosts.vue';
  import button from './button.vue';
  import buttonAdd from './buttonAdd.vue';
  export default {
    data(){
      return {
        count: 0,
      };
    },
    components: {
      AppAside: aside,
      AppHeader: header,
      AppWallPosts: wallPosts,
      AppShopPosts: shopPosts,
      AppButton: button,
      AppButtonAdd: buttonAdd
    }
  }
</script>
<style lang="sass">
@import './assets/style/global.sass'

body
  font-family: Lato

button
  font-family: Lato
.posts-wrapper
    margin-top: -63px



</style>
