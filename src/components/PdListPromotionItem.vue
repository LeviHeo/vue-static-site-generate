<script setup lang="ts">
// ! Add the code to app.js for global
// ! The script here only adds things related to dom rendering. e.g) v-for
</script>

<template lang="pug">
.pd-promotion-item(
  href="/"
)
  .promotion-content
    .promotion-content-inner
      .promotion-label
        | New In
      h2.promotion-title
        | sunray <br/> collection
      .promotion-action
        a.btn-ewj.btn-white.btn-outline(
          href="/"
        )
          | view collection
  .promotion-img
    img(
      src="https://picsum.photos/1420/640?random=77"
      lazy
    )
</template>

<style lang="scss">
@import "@/assets/css/mixin";
</style>