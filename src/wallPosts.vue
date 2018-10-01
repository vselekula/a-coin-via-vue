<template lang="html">
  <div id="wallPosts">
    <vs-row vs-type="flex" vs-justify="center" >
      <vs-col class="wall-post" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-w="3.5" style="padding: 10px; flex-direction: column">
<vs-row >
  <vs-col>
    <vs-button vs-size="large" vs-color="primary" vs-type="filled" vs-icon="face" style="margin-right: 5px"></vs-button>
    <vs-button vs-size="large" vs-color="primary" vs-type="filled" vs-icon="add" style="margin-right: 5px"></vs-button>
    <vs-button vs-size="large" vs-color="primary" vs-type="filled" style="padding: 12.5px 16px;">#</vs-button>
  </vs-col>
</vs-row>
<vs-row>
  <vs-col>
      <textarea-autosize
      v-model="textarea"
      :min-height="1"
      class="message-input"  style="border: none"></textarea-autosize>
  </vs-col>
</vs-row>
<vs-row>
  <vs-col>
    <vs-button vs-size="large">Large</vs-button>
  </vs-col>
</vs-row>
      </vs-col>
      <vs-col class="shop-post" vs-type="flex"  vs-offset="0.5" vs-justify="center" vs-align="center" vs-w="1.5">
      shop
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  data:()=>({
    textarea: '',
    count: 1
  })
}
</script>

<style lang="sass">
.wall-post
      margin-top: -50px
      box-shadow: 0px 2px 7px rgba(66, 66, 66, 0.2)
      background: white
      border-radius: 10px
.shop-post
    margin-top: -50px
    box-shadow: 0px 2px 7px rgba(66, 66, 66, 0.2)
    background: white
    border-radius: 10px
.message-input
  font-size: 30px !important
  margin-top: 10px
  width: 100%
  min-height: 50px !important
</style>
