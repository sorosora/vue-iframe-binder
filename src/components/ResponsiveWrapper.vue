<template lang="pug">
  .responsive-wrapper(:style="{ transform }")
    .device-wrapper(:class="{ desktop: breakpoint === 'desktop', mobile: breakpoint === 'mobile' }")
      slot
</template>

<script>
  import { ResponsiveMixin } from "vue-responsive-components"

  export default {
    mixins: [ResponsiveMixin],
    props: {
      breakpoint: {
        type: String,
        default: 'desktop'
      }
    },
    computed: {
      transform () {
        let result = 'scale(1)'
        if (this.breakpoint === 'desktop') {
          result = `scale(${this.el.width / 800})`
        }
        if (this.breakpoint === 'mobile') {
          result = `scale(${this.el.width / 320})`
        }
        return result
      }
    },
    breakpoints: {
      width: el => el.width
    }
  }
</script>

<style lang="scss" scoped>
  .device-wrapper {
    &.desktop {
      width: 800px;
    }

    &.mobile {
      width: 320px;
    }
  }

  .responsive-wrapper {
    transform-origin: top left;
  }
</style>
