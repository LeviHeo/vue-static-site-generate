<script setup lang="ts">
// ! Add the code to app.js for global
// ! The script here only adds things related to dom rendering. e.g) v-for
</script>

<template lang="pug">
.sub-menu-category
  .sub-menu-category-inner
    .menu-category-group
      .group-sub-title.
        Categories
      .category-group-list
        a.category-item(
          href="/"
        )
          .cat-thumb
            img(
              src="https://picsum.photos/120/120"
            )
          .cat-label.
            All Products
        a.category-item(
          href="/"
        )
          .cat-thumb
            img(
              src="https://picsum.photos/120/120"
            )
          .cat-label.
            Rings
        a.category-item(
          href="/"
        )
          .cat-thumb
            img(
              src="https://picsum.photos/120/120"
            )
          .cat-label.
            Necklasces / Pendants
        a.category-item(
          href="/"
        )
          .cat-thumb
            img(
              src="https://picsum.photos/120/120"
            )
          .cat-label.
            Bangles / Bracelets
        a.category-item(
          href="/"
        )
          .cat-thumb
            img(
              src="https://picsum.photos/120/120"
            )
          .cat-label.
            Earrings
        a.category-item(
          href="/"
        )
          .cat-thumb
            img(
              src="https://picsum.photos/120/120"
            )
          .cat-label.
            Charms
    .menu-category-group
      .group-sub-title.
        Meterial
      .category-group-list
        a.category-item(
          href="/"
        )
          .cat-thumb
            img(
              src="https://picsum.photos/120/120"
            )
          .cat-label.
            Karat Gold
        a.category-item(
          href="/"
        )
          .cat-thumb
            img(
              src="https://picsum.photos/120/120"
            )
          .cat-label.
            Pure Gold
        a.category-item(
          href="/"
        )
          .cat-thumb
            img(
              src="https://picsum.photos/120/120"
            )
          .cat-label.
            White Gold
        a.category-item(
          href="/"
        )
          .cat-thumb
            img(
              src="https://picsum.photos/120/120"
            )
          .cat-label.
            Platinum
</template>

<style lang="scss">
@import "@/assets/css/mixin";

.sub-menu-category {
  .sub-menu-category-inner {
    @include breakpoint-min($nav){
      padding-right:var(--root--spacing--side);
    }
  }

  .menu-category-group {
    + .menu-category-group {
      margin-top:2rem;
    }
  }

  .category-group-list {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap:1rem;

    .category-item { 
      width:calc(50% - 0.5rem);
      text-align: center;
      .cat-thumb {
        border-radius: 3px;
        overflow: hidden;
      }
      .cat-label {
        margin-top:10px;
        color:var(--color--text);
        font-size: 0.875rem;
        font-weight: 500;
      }

      &:hover {
        .cat-label { 
          color:var(--color--highlight);
        }
      }
    }

    @include breakpoint-min($sm){
      flex-wrap: initial;
      .category-item {
        width:120px;
        text-align: center;
        
      }
    }

    
  }
}
</style>
