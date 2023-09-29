<script lang="ts" setup>
import { computed } from 'vue';
import '~/css/sprites.css'

// @ts-ignore
import spritesSvg from '~/images/sprites.svg'

const props = withDefaults(defineProps<{
  iconName: string,
  replacementText?: string | null,
}>(), {
  iconName:'test--color',
  replacementText: null,
})

const isColor = computed(() => props.iconName.slice(-7) === '--color')

const iconImageStyle = computed(() => (
  isColor.value
    ? { backgroundImage: `url('${spritesSvg}#${props.iconName}')` }
    : { '-webkitMaskImage': `url('${spritesSvg}#${props.iconName}')`, maskImage: `url('${spritesSvg}#${props.iconName}')` }
))
</script>

<template lang="pug">
i.svg-icon(
  :class="[\
    `svg-icon--${iconName}`, \
    `svg-icon-${isColor ? 'color' : 'monochrome'}` \
  ]"
)
  span.svg-icon--image(
    :style="iconImageStyle"
  )
</template>

<style lang="scss">
@import '~/css/mixin';

.svg-icon {
  display: inline-block;
  position: relative;
  z-index: 0;
  print-color-adjust: exact;

  @media print {
    print-color-adjust: exact;
  }

  & .svg-icon--image {
    display: block;
    position: absolute;
    z-index: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    will-change: transform, opacity, filter;
    fill: currentColor;
  }

  &.svg-icon-color .svg-icon--image {
    background-image: var(--icon-image);
    background-size: contain;
    background-repeat: no-repeat;
  }

  &.svg-icon-monochrome .svg-icon--image {
    background-color: currentColor;
    mask-image: var(--icon-image);
    mask-size: auto;
    mask-repeat: no-repeat;
  }
}
</style>
