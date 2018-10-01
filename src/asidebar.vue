<template lang="html">

  <div id="parentx">

    <!-- <vs-button @click="active=!active, notExpand = false" vs-color="success" vs-type="filled">Open Sidebar Reduce-expand</vs-button> -->
    <vs-sidebar :reduce="reduce" :reduce-not-hover-expand="notExpand" :hidden-background="HidBG" parent="body" default-index="1"  color="primary" class="sidebarx" spacer v-model="active">

      <div class="header-sidebar" slot="header">
        <vs-avatar  size="100px" src="https://randomuser.me/api/portraits/men/85.jpg"/>
      </div>


        <vs-sidebar-item index="5" icon="search">
          <vs-input placeholder="search" v-model="search" vs-placeholder="Nombre" />
        </vs-sidebar-item>


      <div class="footer-sidebar" slot="footer">
        <vs-button vs-icon="settings" vs-color="primary" vs-type="border"></vs-button>
      </div>

    </vs-sidebar>
  </div>

</template>

<script>
export default {
  data:()=>({
    active:true,
    notExpand: false,
    reduce: true,
    HidBG: true
  })
}
</script>

<style>
.header-sidebar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}

h4{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

h4 button{
  margin-left: 10px;
}

.footer-sidebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.footer-sidebar button{
  border: 0px solid rgba(0,0,0,0) !important;
  border-left: 1px solid rgba(0,0,0,.07) !important;
  border-radius: 0px !important;
}
</style>
