<script>
  export default {
    data () {
      return {
        iframe: null,
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
            break
          default:
        }
      },
      bindIframeText (textId, e) {
        const input = e.target
        if (this.iframeDocument) {
          this.iframeDocument.querySelector(`#${textId}`).innerText = input.value
        }
      },
      bindIframeImg (imgId, e) {
        const input = e.target
        if(this.iframeDocument && input.files && input.files[0]){
          const reader = new FileReader();
          reader.onload = (readerEvent) => {
            this.iframeDocument.querySelector(`#${imgId}`).setAttribute("src", readerEvent.target.result)
          }
          reader.readAsDataURL(input.files[0]);
        }
      }
    },
    mounted () {
      window.addEventListener('message', this.handleMessage)
    }
  }
</script>