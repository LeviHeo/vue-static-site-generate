<script setup lang="ts">
// ! Add the code to app.js for global
// ! The script here only adds things related to dom rendering. e.g) v-for
</script>

<template lang="pug">
.components--collection-slider
  .collection-slider-inner
    .collection-content
      .swiper
        .swiper-wrapper
          .swiper-slide
            .collection-content-item(
              data-bg-color="F0EFEA"
            )
              .collection-title
                .title-inner
                  | Love &<br/> &nbsp;&nbsp;&nbsp;&nbsp; Engagement
              .pd-info
                .pd-thumb
                  img(
                    src="https://www.emperorwatchjewellery.com/upload/images/jewellery/501392_20230331171202_783.jpg"
                    data-src-pc="https://www.emperorwatchjewellery.com/upload/images/jewellery/501392_20230331171202_783.jpg"
                    data-src-mobile="https://www.emperorwatchjewellery.com/upload/images/jewellery_category/20200318121403_40.jpg"
                  )
                .pd-name
                  | Chinese Wedding Fine Gold
                p.
                  Fine Gold Bangle with Rosa-sinensis
              .pd-action
                a.btn-ewj.btn-primary.btn-outline(
                  href="/"
                )
                  | View Collection
          .swiper-slide
            .collection-content-item(
              data-bg-color="E5DECE"
            )
              .collection-title
                .title-inner
                  | Celebrity Picks
              .pd-info
                .pd-thumb
                  img(
                    src="https://www.emperorwatchjewellery.com/upload/images/jewellery/501393_20230331171352_783.jpg"
                  )
                .pd-name
                  | Chinese Wedding Fine Gold
                p.
                  Fine Gold Bangle with Rosa-sinensis
              .pd-action
                a.btn-ewj.btn-primary.btn-outline(
                  href="/"
                )
                  | View Collection
        ButtonController(
          direction="prev-long"
          type="dark"
        )
        ButtonController(
          direction="next-long"
          type="dark"
        )
    .collection-kv
      .swiper
        .swiper-wrapper
          .swiper-slide
            .collection-kv-item
              img(
                src="https://picsum.photos/930/524?random=65"
                data-src-pc="https://picsum.photos/930/524?random=65"
                data-src-tablet="https://picsum.photos/1230/424?random=65"
                data-src-mobile="https://picsum.photos/524/624?random=65"
              )
          .swiper-slide
            .collection-kv-item
              img(
                src="https://picsum.photos/930/524?random=15"
                data-src-pc="https://picsum.photos/930/524?random=15"
                data-src-tablet="https://picsum.photos/1230/424?random=65"
                data-src-mobile="https://picsum.photos/524/624?random=65"
              )
</template>

<style lang="scss">
@import "@/assets/css/mixin";
</style>