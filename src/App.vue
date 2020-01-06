<template lang="pug">
  #app
    .row
      | 第一張圖：
      input(type='file', @input="bindIframeImg('img-1', $event)", accept='image/gif, image/jpeg, image/png')
      p ，值：{{ bindedImg['img-1'] }}
    .row
      | 第一段文字：
      input(type='text', @input="bindIframeText('text-1', $event)", :value="bindedText['text-1']")
      p ，值：{{ bindedText['text-1'] }}
    button(@click='toggleMobile') {{ isMobile ? "切換桌機" : "切換手機" }}
    button(@click='toggleZoomIn') {{ isZoomIn ? "銷毀" : "放大" }}
    .iframe-container
      .iframe-wrapper
        | {{ isMobile ? "手機" : "桌機" }}即時預覽
        responsive-wrapper(:breakpoint="isMobile ? 'mobile' : 'desktop'")
          iframe(ref='iframe')
    zoom-in-modal(:active="isZoomIn", :onClose="toggleZoomIn", :data="iframeViewerData")
</template>

<script>
import IframeBinder from "./components/IframeBinder";
import templateString from "../htmlTemplate/1";
import ZoomInModal from "./components/ZoomInModal";
import ResponsiveWrapper from "./components/ResponsiveWrapper";

export default {
  name: "App",
  mixins: [IframeBinder],
  components: {
    ZoomInModal, ResponsiveWrapper
  },
  data () {
    return {
      bindedImg: {
        'img-1': 'https://picsum.photos/200/300'
      },
      bindedText: {
        'text-1': 'asdf'
      },
      iframeSrc: templateString,
      isZoomIn: false,
      isMobile: false
    }
  },
  computed: {
    iframeViewerData () {
      return {
        bindedImg: this.bindedImg,
        bindedText: this.bindedText,
        iframeSrc: this.iframeSrc
      }
    }
  },
  methods: {
    toggleZoomIn () {
      this.isZoomIn = !this.isZoomIn
    },
    toggleMobile () {
      this.isMobile = !this.isMobile
    },
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.row {
  display: flex;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
}

.iframe-wrapper {
  display: flex;
  flex-direction: column;
}

.iframe-container {
  display: flex;
  justify-content: center;

  .iframe-wrapper {
    flex: 1 1 50%;
    max-width: 50%;
    padding: 10px;
  }
}

iframe {
  width: 100%;
  height: 700px;
}
</style>
