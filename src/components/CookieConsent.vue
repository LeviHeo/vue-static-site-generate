<script setup lang="ts">
// ! Add the code to app.js for global
// ! The script here only adds things related to dom rendering. e.g) v-for
</script>

<template lang="pug">
.components--cookie-consent
  .content-inner
    .cookie-consent-text
      | We use Cookie to provide you tailored user experience. By clicking “Continue”, you agree to the use of Cookie. Find out more about our Privacy Policy by clicking <a target="_self" href="/en/privacy">here</a>.
    .cookie-consent-action
      button.btn-agree
        | Continue
</template>

<style lang="scss">
@import "@/assets/css/mixin";

.components--cookie-consent {
  position: fixed;
  bottom:0;
  left:0;
  width:100%;
  background-color: #ffffff;
  border-top:2px solid var(--color--highlight);
  opacity: 0;
  pointer-events: none;
  z-index:var(--zindex-cookie-consent);
  transition: opacity var(--root--duration--fast) ease-in-out;
  &.active {
    pointer-events: initial;
    opacity: 1;
  }

  .content-inner {
    padding:2rem var(--root--spacing--side);

    @include breakpoint-min($sm){
      display: flex;
      align-items: center;
    }
  }

  .cookie-consent-text {
    font-size: 0.875rem;
    @include breakpoint-min($sm){
      width:70%;
    }
  }

  .cookie-consent-action {
    font-weight: 500;
    margin-top:1rem;

    @include breakpoint-min($sm){
      margin-top:0;
      width:30%;
      display: flex;
      justify-content: flex-end;
    }

    button {
      text-transform: uppercase;
      font-size: 0.875rem;
      padding:0.5rem 1.5rem;
      color:#ffffff;
      background-color: var(--color--highlight);
      letter-spacing: var(--root-letter-spacing);

      &:hover {
        background-color: var(--color--brown-3);
      }
    }
  }
}
</style>
