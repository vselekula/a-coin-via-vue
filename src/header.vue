<template lang="html">
  <div id="header">
      <vs-row vs-justify="center" class="titles">
        <vs-col style="title-likes" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-w="4.9">
          <h2>У тебя есть {{ amountLikes }} A.coins на благодарности</h2>
        </vs-col>
      </vs-row>
    </div>
</template>
<script>
export default {
  data:()=>({
    userId: 1,
    amountLikes: 100,
  })
}
</script>
<style lang="sass">
#header
  height: 200px
  background-color: rgb(31, 116, 255)
  // font-size: 30px
  color: white

.titles
  height: 220px

</style>
