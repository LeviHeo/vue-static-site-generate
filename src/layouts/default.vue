<script lang="ts">
  export default {
    name: 'default' // id of the layout (required)
  }
</script>

<template lang="pug">
DefaultHeader
main
  .container
    router-view
  aside.aside-back-to-top
    button.back-to-top
      SvgIcon.icon(
        icon-name="arrow-up-top"
      )
DefaultFooter
PopupContainer
CookieConsent
#mask
</template>

<style lang="scss">
@import "@/assets/css/style";
</style>