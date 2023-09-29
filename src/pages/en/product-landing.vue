<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Product landing',
  meta: [
    {
      name: 'description',
      content: 'Website description',
    }
  ]
})
</script>

<template lang="pug">
section
  KeyVisual
section
  CategorySlider
section
  ShopList
</template>

<!-- No used scoped for prevent data-v attribute when build -->
<style lang="scss">
</style>
