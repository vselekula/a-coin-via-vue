<template lang="html">
  <div id="wallPosts">
      <vs-col class="wall-post" vs-type="flex" vs-justify="flex-start" vs-align="center">
<vs-row >
  <vs-col vs-type="flex">
    <!-- <vs-button class="faceAfter" :click="show=!show" vs-size="large" vs-color="primary" vs-type="filled" vs-icon="face" style="margin-right: 5px"></vs-button>
    <vs-button vs-size="large" v-on:click="add" vs-color="primary" vs-type="filled" vs-icon="add" style="margin-right: 5px"></vs-button>
    <vs-button vs-size="large" v-on:click="hashtag" vs-color="primary" vs-type="filled" style="padding: 12.5px 16px;">#</vs-button> -->
    <AppButton></AppButton>
    <AppButton></AppButton>
    <AppButton></AppButton>
  </vs-col>
</vs-row>
<vs-row>
  <vs-col>
      <textarea-autosize
      v-model="textarea"
      :min-height="1"
      id="message-input"  style="border: none"></textarea-autosize>
  </vs-col>
</vs-row>
<vs-row>
  <vs-col>
    <vs-button vs-size="large">Отправить!</vs-button>
  </vs-col>
</vs-row>
      </vs-col>
  </div>
</template>

<script>
import button from './button.vue';
export default {
  data:()=>({
    textarea: '',
    count: 1,
    expand: false
  }),
  methods:{
    face: function (){
       // document.getElementById('message-input').value+='@';
    },
    add: function (){
       document.getElementById('message-input').value+='+';
    },
    hashtag: function (){
       document.getElementById('message-input').value+='#';
    }
  },
  components: {
    AppButton: button
  }
}
</script>

<style lang="sass">
.wall-post
      box-shadow: 0px 2px 7px rgba(66, 66, 66, 0.2)
      background: white
      border-radius: 10px
      margin-top: 10px
      font-family: Lato !important
      padding: 10px
      flex-direction: column
.faceAfter

#message-input
  font-size: 30px !important
  margin-top: 10px
  width: 100%
  min-height: 50px !important
</style>
