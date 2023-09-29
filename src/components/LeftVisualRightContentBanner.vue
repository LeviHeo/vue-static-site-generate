<script setup lang="ts">
// ! Add the code to app.js for global
// ! The script here only adds things related to dom rendering. e.g) v-for
</script>

<template lang="pug">
.components--left-visual-right-content-banner
  .left-visual-right-content-inner
    .left-visual
      .visual-item
        img(
          src="https://picsum.photos/930/524?random=6"
        )
    .right-content
      .right-content-inner
        .right-content-item
            h2.content-title
              | Brand Story
            p.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
            .content-action
              a.btn-ewj.btn-white(
                href="/"
              )
                | Learn More
</template>

<style lang="scss">
@import "@/assets/css/mixin";
</style>