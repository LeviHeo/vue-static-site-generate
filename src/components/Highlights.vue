<script setup lang="ts">
// ! Add the code to app.js for global
// ! The script here only adds things related to dom rendering. e.g) v-for
</script>

<template lang="pug">
.components--highlights
  .highlights-inner
    h2.type-line
      | Highlights
    .highlights-content
      PdListNormalItem
      PdListPromotionItem
      PdListNormalItem
      PdListNormalItem
      PdListNormalItem
</template>

<style lang="scss">
@import "@/assets/css/mixin";
</style>