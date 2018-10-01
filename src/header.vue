<template lang="html">
  <div id="header">
      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
          You have {{ amountLikes }} points
        </vs-col>
      </vs-row>
    </div>
</template>
<script>
export default {
  data:()=>({
    userId: 1,
    amountLikes: 1000
  })
}
</script>
<style lang="sass">
#header
    height: 200px
    background-color: #eee
</style>
