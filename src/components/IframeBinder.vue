<script>
  export default {
    data () {
      return {
        iframeDocument: null,
        iframeSrc: `
          <!doctype html>
          <html>
            <body>
            </body>
          </html>
        `,
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
      scriptAddedIframeSrc () {
        const closedBodyIndex = this.iframeSrc.indexOf('</body>')
        const scriptAddedSrc = this.iframeSrc.slice(0, closedBodyIndex) + this.onLoadMessageScript + this.iframeSrc.slice(closedBodyIndex)
        return scriptAddedSrc
      }
    },
    methods: {
      initIframeDocument () {
        const iframe = this.$refs.iframe
        if (!iframe) {
          return;
        }
        this.iframeDocument = iframe.contentDocument ? iframe.contentDocument : iframe.contentWindow.document;
        this.iframeDocument.open()
        this.iframeDocument.write(this.scriptAddedIframeSrc)
      },
      handleMessage (event) {
        const data = event.data
        switch (data.cmd) {
          case 'iframeLoaded':
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
      this.initIframeDocument()
    }
  }
</script>