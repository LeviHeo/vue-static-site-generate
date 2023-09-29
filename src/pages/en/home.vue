<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Home page',
  meta: [
    {
      name: 'home page description',
      content: 'home page website description',
    }
  ],
  script: [
    // For JS value provided by CMS.
    {
      type: "text/javascript",
      children:`
        const test = 'eee';
        const foo = 'foo';
        const bar = 1234;
      `
    },
    // Page nested JS.
    {
      src: "/src/assets/js/home.js",
      type: "text/javascript",
      async: true,
    }
  ],
})
</script>

<template lang="pug">
component(
  :is="'script'"
  type="text/javascript"
)
  .
    const next = 'next'
    console.log('inline script!')
section
  KeyVisual
section
  LeftVisualRightContentSlider
section
  CollectionSlider
section
  Highlights
section
  LeftVisualRightContentBanner
section
  FollowUs
section
  FullWidthBanner
</template>

<!-- No used scoped for prevent data-v attribute when build -->
<style lang="scss">
.home {
  border:2px solid red;
}
</style>
