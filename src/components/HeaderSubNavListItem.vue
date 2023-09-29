<script setup lang="ts">
// ! Add the code to app.js for global
// ! The script here only adds things related to dom rendering. e.g) v-for
</script>

<template lang="pug">
a.sub-nav-list-item(
  href="/"
)
  .list-item-thumb
    img(
      src="https://picsum.photos/332/204"
    )
  .list-item-desc
    | Lorem ipsum dolor sit amet consectetur adipisicing elit. sit amet consectetur adipisicing elit.
</template>

<style lang="scss">
@import "@/assets/css/mixin";

.sub-nav-list-item {
  display: block;
  width:calc(50% - 0.5rem);

  @include breakpoint-min($sm){
    width:calc(25% - 1rem);
  }

  @include breakpoint-min($nav){
    width:330px;
  }

  .list-item-thumb {
    margin-bottom:1rem;
  }
  .list-item-desc {
    color:var(--color--text);
    font-weight: 500;
    font-size: 0.875rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
}
</style>
