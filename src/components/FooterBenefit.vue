<script setup lang="ts">
// ! Add the code to app.js for global
// ! The script here only adds things related to dom rendering. e.g) v-for
</script>

<template lang="pug">
.components--footer-benefit
  .conent-inner
    .benefit-item
      figure.item-icon
        img(
          src="@/assets/images/sprites/jewelry.svg"
        )
      .item-title.
        Highest standard of guality
      p.item-desc.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
    .benefit-item
      figure.item-icon
        img(
          src="@/assets/images/sprites/search.svg"
        )
      .item-title.
        Find Your Size
      p.item-desc.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
    .benefit-item
      figure.item-icon
        img(
          src="@/assets/images/sprites/gift.svg"
        )
      .item-title.
        Gift Wrapping
      p.item-desc.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
    .benefit-item
      figure.item-icon
        img(
          src="@/assets/images/sprites/after-service.svg"
        )
      .item-title.
        After-Sale Services
      p.item-desc.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
</template>

<style lang="scss">
@import "@/assets/css/mixin";

.components--footer-benefit {
  border-top:1px solid var(--color--border);
  background-color: #fff;
  .conent-inner {
    @include innerContent;
    padding:50px var(--root--spacing--side);

    @include breakpoint-min($sm){
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: space-around;
      gap: 3rem 1rem;
    }

    @include breakpoint-min($md){
      flex-wrap: initial;
      justify-content: space-between;
    }
  }

  .benefit-item {
    text-align: center;
    + .benefit-item { 
      margin-top:2rem;
      @include breakpoint-min($sm){
        margin-top:0;
      }
    }

    .item-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #FAF8F3;
      border-radius: 50%;
      width:50px;
      height:50px;
      margin:0 auto 1rem;
      img {
        max-width: 26px;
        max-height:22px;
      }
    }

    .item-title {
      text-transform: uppercase;
      font-weight: 600;

      + .item-desc {
        margin-top:0.875rem;
      }
    }

    .item-desc {
      max-width:280px;
      width: 80%;
      margin:0 auto;
      font-size: 0.875rem;
    }
  }
}
</style>
