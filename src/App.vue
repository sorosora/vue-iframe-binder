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
    button(@click='toggleDisplay') {{ isDisplay ? "銷毀" : "複製" }}
    .iframe-container
      .iframe-wrapper
        | 即時預覽
        iframe(ref='iframe')
      .iframe-wrapper
        | 複製視窗(不即時更新，預備做放大視窗)
        iframe-viewer(:data='iframeViewerData', v-if='isDisplay')
</template>

<script>
import IframeBinder from "./components/IframeBinder";
import templateString from "../htmlTemplate/1";
import IframeViewer from "./components/IframeViewer";

export default {
  name: "App",
  mixins: [IframeBinder],
  components: {
    IframeViewer
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
      isDisplay: false
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
    toggleDisplay () {
      this.isDisplay = !this.isDisplay
    }
  }
};
</script>

<style lang="scss">
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

  .iframe-wrapper {
    flex: 1 1 50%;
    padding: 10px;
  }
}

iframe {
  height: 700px;
}
</style>
