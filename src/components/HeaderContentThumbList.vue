<script setup lang="ts">
// ! Add the code to app.js for global
// ! The script here only adds things related to dom rendering. e.g) v-for
</script>

<template lang="pug">
.group-content-detail-thumb-list
  .swiper.signature-list
    ButtonController(
      direction="prev"
    )
    ButtonController(
      direction="next"
    )
    .swiper-wrapper
      .swiper-slide(
        v-for="item in 2"
      )
        HeaderSubNavListItem
</template>

<style lang="scss">
@import "@/assets/css/mixin";

.group-content-detail-thumb-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  @include breakpoint-min($nav){
    display: block;
    gap :unset;
  }
}
</style>
