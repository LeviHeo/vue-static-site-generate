<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter();
// useHead for custom meta / Head script
import { useHead } from '@vueuse/head'
useHead({
  title: 'Index',
  meta: [
    {
      name:'robots',
      content:'noindex,nofollow'
    },
    {
      name:'googlebot',
      content:'noindex'
    }
  ]
})
</script>

<template lang="pug">
section
  .all-route
    .inner-content
      h2
        | All Pages
      ul
        li(v-for="(route, index) in router.options.routes.sort((a, b) => (a.name > b.name) ? 1 : -1)" :key="index")
          a(
            :href="route.path"
          )
            | {{ route.name.replace('en-', '') }}
section
  .pdp-page-header
    ul.breadcrumb
      li
        a(
          href="/"
        )
          | Home
      li
        a(
          href="/"
        )
          | Love & Engagement
      li
        | Chinese Wedding Fine Gold
    .page-header-content
      h1
        | Chinese Wedding Fine Gold
      p.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit fuga velit facere praesentium obcaecati repellat unde quos et deserunt illum quod, eos cupiditate cum non iste voluptatem accusantium quasi perspiciatis?
section
  .inner-content.inner-padding
    h1
      | h1 - All Jewellery
    h2
      | h2 - Other Watches
    h3
      | h3 - More Gold Products
    h4
      | h4 - You May also like
    h5
      | h5 - Must Have Items
    h2.type-line
      | Explore <br/> Our Collections

section
  .buttons(
    style="background-color:#f2f2f2;padding:4rem;position:relative;"
  )
    .inner-content.inner-padding(
      style="display:flex;flex-wrap:wrap;gap:1rem;"
    )

      button.btn-ewj.btn-primary
        | View More
      button.btn-ewj.btn-outline
        | Discover
      button.btn-ewj.btn-white
        | Show More
      button.btn-ewj.btn-white.btn-outline
        | Shop Now
      button.btn-ewj.btn-white(
        data-popup="share-page"
      )
        SvgIcon.icon(
          icon-name="share"
        )
        .btn-label
          | Share
      button.btn-popup-close
        SvgIcon.icon(
          icon-name="close"
        )
      ButtonController(
        direction="prev"
      )
      ButtonController(
        direction="next"
      )
section
  h2.ta-c
    | You May Also Like
section
  Table
section
  Disclaimer
section

</template>

<!-- No used scoped for prevent data-v attribute when build -->
<style lang="scss">
/* Style */
@import "@/assets/css/mixin";

.content {
  min-height:100vh;
}

.all-route {
  @include innerContent;
  padding:var(--root--spacing--side);
  border:1px solid #f2f2f2;
  background-color: #f2f2f2;
  margin-top:2rem;
  border-radius: 5px;
  ul {
    margin-top:10px;
    display: flex;
    flex-wrap: wrap;
    gap:2rem;
    li {
      a {
        display: block;
        text-transform: capitalize;
      }
    }
  }
}
</style>