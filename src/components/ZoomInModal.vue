<template lang="pug">
  modal(
    name="zoom-in",
    width="80%"
    height="80%"
    @closed="onClose"
  )
    iframe-viewer(:data='data')
</template>

<script>
  import IframeViewer from "./IframeViewer";

  export default {
    components: {
      IframeViewer
    },
    props: {
      active: {
        type: Boolean,
        default: false,
      },
      onClose: {
        type: Function,
        default: null
      },
      data: {
        type: Object,
        default: null
      }
    },
    watch: {
      active (value) {
        if (value) {
          this.$modal.show('zoom-in');
        } else {
          this.$modal.hide('zoom-in');
        }
      }
    },
  }
</script>
