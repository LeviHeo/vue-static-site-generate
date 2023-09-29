<script setup lang="ts">
// ! Add the code to app.js for global
// ! The script here only adds things related to dom rendering. e.g) v-for
</script>

<template lang="pug">
.components--category-slider
  .category-slider-inner
    h2.type-line
      | Jewellery
    .category-items-wrap
      .category-title
        | Categories
      .category-controller
        .controller-inner
          ButtonController(
            direction="prev-long"
            type="dark"
          )
          ButtonController(
            direction="next-long"
            type="dark"
          )
      .swiper
        .swiper-wrapper
          .swiper-slide
            .category-item
              .category-item-inner
                .thumb
                  img(
                    src="https://picsum.photos/330/440?random=666"
                  )
                .label
                  | 1966 Large Date and Moon Phases
          .swiper-slide
            .category-item
              .category-item-inner
                .thumb
                  img(
                    src="https://picsum.photos/330/440?random=667"
                  )
                .label
                  | 1966 Large Date and Moon Phases
          .swiper-slide
            .category-item
              .category-item-inner
                .thumb
                  img(
                    src="https://picsum.photos/330/440?random=668"
                  )
                .label
                  | 1966 Large Date and Moon Phases
          .swiper-slide
            .category-item
              .category-item-inner
                .thumb
                  img(
                    src="https://picsum.photos/330/440?random=669"
                  )
                .label
                  | 1966 Large Date and Moon Phases
          .swiper-slide
            .category-item
              .category-item-inner
                .thumb
                  img(
                    src="https://picsum.photos/330/440?random=670"
                  )
                .label
                  | 1966 Large Date and Moon Phases
          .swiper-slide
            .category-item
              .category-item-inner
                .thumb
                  img(
                    src="https://picsum.photos/330/440?random=671"
                  )
                .label
                  | 1966 Large Date and Moon Phases
          .swiper-slide
            .category-item
              .category-item-inner
                .thumb
                  img(
                    src="https://picsum.photos/330/440?random=672"
                  )
                .label
                  | 1966 Large Date and Moon Phases
    .category-action
      a.btn-ewj.btn-outline(
        href="/"
      )
        | View All Jewellery
</template>

<style lang="scss">
@import "@/assets/css/mixin";
</style>