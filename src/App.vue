<template>
  <div id="app">
    <input type="file" @input="bindIframeImg('img-1', $event)" accept="image/gif, image/jpeg, image/png" />
    <p>{{ bindedImg['img-1'] }}</p>
    <input type="text" @input="bindIframeText('text-1', $event)" v-model="bindedText['text-1']" />
    <p>{{ bindedText['text-1'] }}</p>
    <iframe ref="iframe"></iframe>
  </div>
</template>

<script>
import IframeBinder from "./components/IframeBinder";
import templateString from "../htmlTemplate/1";

export default {
  name: "App",
  mixins: [IframeBinder],
  components: {
    IframeBinder
  },
  data () {
    return {
      bindedImg: {
        'img-1': 'https://picsum.photos/200/300'
      },
      bindedText: {
        'text-1': 'asdf'
      },
      iframeSrc: templateString
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
