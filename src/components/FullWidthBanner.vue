<script setup lang="ts">
// ! Add the code to app.js for global
// ! The script here only adds things related to dom rendering. e.g) v-for
const props = withDefaults(defineProps<{
  type?:string
}>(), {
  type:undefined
})
</script>

<template lang="pug">
.components--fullwidthbanner(
  :class="[\
    type === 'event' && 'event'\
  \]"
)
  .fullwidth-banner-inner
    .banner-content
      template(
        v-if="type === 'event'"
      )
        .banner-label
          |  NEXT EVENT
        h3.banner-title
          | Test
        p.banner-desc
          | Explore iconic jewelry, diamond engagement rings, elegant accessories and inspired gifts for any occasion at our flagship stores
        .banner-action
          a.btn-ewj.btn-white.btn-outline(
            href="/"
          )
            | Discover Now
      template(
        v-else
      )
        h3.banner-title
          | Test
        p.banner-desc
          | Explore iconic jewelry, diamond engagement rings, elegant accessories and inspired gifts for any occasion at our flagship stores
        .banner-action
          a.btn-ewj.btn-white(
            href="/"
          )
            | Discover Now
    .banner-bg
      .bg-inner
        img(
          src="https://picsum.photos/1920/1080?random=10"
        )
</template>

<style lang="scss">
@import "@/assets/css/mixin";
</style>