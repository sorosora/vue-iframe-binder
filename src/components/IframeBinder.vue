<script>
  export default {
    data () {
      return {
        iframeDocument: null,
        onLoadMessageScript: `
          <script>
            window.parent.postMessage({
              cmd: 'iframeLoaded',
              params: {
                success: true,
                data: null
              }
            }, '*');
          <\/script>
        `
      }
    },
    computed: {
      iframeSrcdoc () {
        const closedBodyIndex = this.iframeSrc.indexOf('</body>')
        const scriptAddedSrcdoc = this.iframeSrc.slice(0, closedBodyIndex) + this.onLoadMessageScript + this.iframeSrc.slice(closedBodyIndex)
        return scriptAddedSrcdoc
      }
    },
    methods: {
      setIframeDocument () {
        const iframe = this.$refs.iframe
        this.iframeDocument = iframe.contentDocument ? iframe.contentDocument : iframe.contentWindow.document;
      },
      handleMessage (event) {
        const data = event.data
        switch (data.cmd) {
          case 'iframeLoaded':
            this.setIframeDocument()
            this.initBindedText()
            this.initBindedImg()
            break
          default:
        }
      },
      setBindedText (textId, value) {
        if (!this.iframeDocument) {
          return;
        }
        this.iframeDocument.querySelector(`#${textId}`).innerText = value
      },
      setBindedImg (imgId, value) {
        if (!this.iframeDocument) {
          return;
        }
        this.iframeDocument.querySelector(`#${imgId}`).setAttribute("src", value)
      },
      bindIframeText (textId, e) {
        const { target: { value } } = e
        this.setBindedText(textId, value);
      },
      bindIframeImg (imgId, e) {
        const input = e.target
        if(input.files && input.files[0]){
          const reader = new FileReader();
          reader.onload = (readerEvent) => {
            this.setBindedImg(imgId, readerEvent.target.result)
          }
          reader.readAsDataURL(input.files[0]);
        }
      },
      initBindedText () {
        Object.keys(this.bindedText).forEach((key) => {
          this.setBindedText(key, this.bindedText[key])
        })
      },
      initBindedImg () {
        Object.keys(this.bindedImg).forEach((key) => {
          this.setBindedImg(key, this.bindedImg[key])
        })
      }
    },
    mounted () {
      window.addEventListener('message', this.handleMessage)
    }
  }
</script>