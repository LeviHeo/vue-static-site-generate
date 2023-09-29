<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import { useHead } from '@vueuse/head'
import { useMouse } from '@/composable/mouse'
import { useSectionTrigger } from '@/composable/useSectionTrigger';
// import { Swiper, SwiperSlide } from 'swiper/vue'
import { useScrollTo } from '@/composable/useScrollTo'

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
    const VM = 'Test';
    const abcd = '1234';
    console.log('I am running myself!');
    const otehrCode = ()=>{
      console.log(abcd)
    };
    otehrCode()
.content
  .box1
    | en index Mouse position is at:
  .box2
    | {{ VITE_TEST }}
  .icons
    SvgIcon(
      icon-name="facebook"
    )
  HelloWorld(
    msg='Hello Wolrd'
  )
section
  | section1
section
  Swiper(
    @init="onSwiperInit"
  )
    SwiperSlide
      | slide1
    SwiperSlide
      | slide2
section
  button.get-list(
    @click="getList"
  )
    | Get API data {{ googleMapSrc }}
  | {{ todoList }}
button.scroll-to-top(
  @click="useScrollTo()"
)
  | to top
component(
  :src='googleMapSrc'
  :is="'script'"
)
</template>

<!-- No used scoped for prevent data-v attribute when build -->
<style lang="scss">
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

section {
  border:2px solid green;
  height:100vh;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
