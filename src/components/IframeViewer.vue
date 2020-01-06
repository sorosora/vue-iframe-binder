<template>
  <iframe ref="iframe"></iframe>
</template>

<script>
import IframeBinder from "./IframeBinder";

export default { 
  mixins: [IframeBinder],
  props: {
    data: {
      type: Object,
      default: () => ({
        bindedImg: IframeBinder.data.bindedImg,
        bindedText: IframeBinder.data.bindedText,
        iframeSrc: IframeBinder.data.iframeSrc
      })
    }
  },
  data () {
    return {
      bindedImg: this.data.bindedImg,
      bindedText: this.data.bindedText,
      iframeSrc: this.data.iframeSrc,
    }
  }
};
</script>

<style lang="scss" scoped>
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
</style>
