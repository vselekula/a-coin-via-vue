<template lang="html">
  <form id="button" action="#">
<label :data-state="state" for="search">
  <input type="text" placeholder="Поиск сотрудника" @click="state = 'open'" @blur="state='close'"/>
  <i class="material-icons" @click="" aria-hidden="true">{{ icon.face }}</i>
</label>
</form>
</template>

<script>
export default {
  data:()=>({
    state: "close",
    icon: {
      "face": 'face',
      "add": 'add',
      "hashtag": '#'
    }
  })
}
</script>

<style lang="scss">
// body{
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   background-color: #F0AD4E;
// }
#buton{
  margin-right: 5px;
}
label{
  position: relative;
  display: inline-block;
  background-color: #fff;
  padding: 5px 12px;
  transition: all 1s ease;
  border-radius: 0;
  box-shadow: 1px 1px 5px rgba(0,0,0,0.5);
  margin-right: 5px;
  &::after{
    content: '';
    display: block;
    height: 2px;
    width: 80%;
    background-color: rgb(31, 116, 255);
    transition: all 0.5s ease 0.5s;
  }
  input{
    transition: width 0.5s ease, opacity 0.5s ease 0.5s;
    opacity: 1;
    width: 180px;
    height: 25px;
    border: 0;
    outline: none;
    color: darken(rgb(31, 116, 255), 25)
  }
  i{
    position: absolute;
    top: 11px;
    right: 11px;
    color: rgb(31, 116, 255);
    cursor: pointer;
  }
  &[data-state="close"]{
    border-radius: 30px;
    padding: 5px 5px;
     transition: all 0.5s ease;
    &::after{
      width: 0%;
      transition: all 0.3s ease;
    }
    i{
      pointer-events: none;
    }
    input{
      width: 28px;
      height: 25px;
      opacity:0;
      cursor: pointer;
      transition: opacity 0.5s ease, width 0.5s ease;
      -webkit-appearance:none
    }
  }
}

</style>
