<script setup lang="ts">
// ! Add the code to app.js for global
// ! The script here only adds things related to dom rendering. e.g) v-for
</script>

<template lang="pug">
.components--left-visual-right-content-slider
  .left-visual-right-content-inner
    .left-visual
      .swiper
        .swiper-wrapper.left-visual-wrap
          .swiper-slide
            .visual-item
              img(
                src="https://picsum.photos/930/524?random=4"
              )
          .swiper-slide
            .visual-item
              img(
                src="https://picsum.photos/930/524?random=6"
              )
    .right-content
      .right-content-inner
        .swiper
          .swiper-wrapper.right-content-wrap
            .swiper-slide
              .right-content-item
                h2.content-title
                  | Mother's Day Collection
                p.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                .content-action
                  a.btn-ewj.btn-primary(
                    href="/"
                  )
                    | Learn More
            .swiper-slide
              .right-content-item
                h2.content-title
                  | Gold Festival
                p.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                .content-action
                  a.btn-ewj.btn-primary(
                    href="/"
                  )
                    | Learn More
          .slide-controller
            ButtonController(
              direction="prev"
            )
            ButtonController(
              direction="next"
            )
</template>

<style lang="scss">
@import "@/assets/css/mixin";
</style>