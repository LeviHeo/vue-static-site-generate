<script setup lang="ts">
// ! Add the code to app.js for global
// ! The script here only adds things related to dom rendering. e.g) v-for

const props = withDefaults(defineProps<{
  direction?:string,
  type?:string,
}>(), {
  direction: undefined,
  type:undefined,
})
</script>

<template lang="pug">
template(
  v-if="direction === 'prev'"
)
  button.btn-controller.btn-prev(
    :class="[\
      type ? type : undefined\
    \]"
  )
    SvgIcon.icon(
      icon-name="arrow-prev"
    )
template(
  v-if="direction === 'prev-long'"
)
  button.btn-controller.btn-prev.long(
    :class="[\
      type ? type : undefined\
    \]"
  )
    SvgIcon.icon(
      icon-name="arrow-prev-long"
    )
template(
  v-if="direction === 'next'"
)
  button.btn-controller.btn-next(
    :class="[\
      type ? type : undefined\
    \]"
  )
    SvgIcon.icon(
      icon-name="arrow-next"
    )
template(
  v-if="direction === 'next-long'"
)
  button.btn-controller.btn-next.long(
    :class="[\
      type ? type : undefined\
    \]"
  )
    SvgIcon.icon(
      icon-name="arrow-next-long"
    )
</template>

<style lang="scss">
.btn-controller {
  position: absolute;
  top:50%;
  transform: translateY(-50%);
  z-index:11;
  img {
    width:10px;
  }
}

.btn-prev {
  left:16px;
}
.btn-next {
  right:16px;
}
</style>
