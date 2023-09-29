<script setup lang="ts">
// ! Add the code to app.js for global
// ! The script here only adds things related to dom rendering. e.g) v-for
</script>

<template lang="pug">
.components--keyvisual
  .keyvisual-inner
    .swiper
      .keyvisual-controller
        .controller-inner
          ButtonController(
            direction="prev-long"
          )
          .pagination
          ButtonController(
            direction="next-long"
          )
      .swiper-wrapper.keyvisual-wrap
        .swiper-slide
          .keyvisual-item
            .kv-content
              .kv-content-inner
                h2.kv-title
                  | sunray <br/> collection
                .kv-action
                  a.btn-ewj.btn-white.btn-outline(
                    href="/"
                  )
                    | view collection
            .kv-img
              img(
                src="https://picsum.photos/1420/640?random=1"
                lazy
              )
        .swiper-slide
          .keyvisual-item
            .kv-content
              .kv-content-inner
                h2.kv-title
                  | PIAGET
                .kv-action
                  a.btn-ewj.btn-white.btn-outline(
                    href="/"
                  )
                    | view more
            .kv-img
              img(
                src="https://picsum.photos/1420/640?random=2"
                lazy
              )
</template>

<style lang="scss">
@import "@/assets/css/mixin";
</style>