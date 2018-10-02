<template lang="html">
  <div id="shopPosts">
      <vs-col class="shop-post" vs-type="flex" vs-offset="1">
          <p>
            У тебя есть <b>{{ amountMoney }} A.coins</b> на покупки
          </p>
          <vs-button class="goToShop" vs-color="primary" vs-type="border">Выбрать покупку</vs-button>
      </vs-col>
  </div>
</template>

<script>
export default {
  data:()=>({
    amountMoney: 3000
  })
}
</script>

<style lang="sass">
.shop-post
      box-shadow: 0px 2px 7px rgba(66, 66, 66, 0.2)
      background: white
      border-radius: 10px
      margin-top: 10px
      font-family: Lato !important
      padding: 10px
      flex-direction: column
      height: 100px
      flex-direction: column
      justify-content: space-between

.goToShop
  display: flex
  justify-content: center
</style>
