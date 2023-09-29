<script setup lang="ts">
// ! Add the code to app.js for global
// ! The script here only adds things related to dom rendering. e.g) v-for
</script>

<template lang="pug">
.error
  .error-detail
    .error-code
      img(
        src="/404.svg"
        alt="404"
      )
    .error-title
      | Something gone Wrong!
    p.error-desc
      | Sorry, we were unable to find that page
    .error-action
      a.btn-ewj.btn-primary(
        href="/"
      )
        | Back To Home
</template>

<style lang="scss">
@import "@/assets/css/mixin";
.error {
  display: flex;
  align-items: center;
  justify-content: center;
  height:calc(100svh - var(--root--header--height));
  .error-detail {
    text-align: center;

    .error-code {
      display: flex;
      align-items: center;
      justify-content: center;
      width:160px;
      max-width: 100%;
      margin:0 auto 30px;
      img {
        display: block;
      }

      @include breakpoint-min($nav){
        width:270px;
        margin:0 auto 70px;
      }
    }

    .error-title {
      text-transform: uppercase;
      @include font-size-h3;
      margin-bottom:20px;
    }

    .error-action {
      margin-top:60px;
    }
  }
}
</style>