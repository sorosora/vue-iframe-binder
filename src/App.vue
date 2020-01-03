<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png">
    <HelloWorld msg="Hello Vue in CodeSandbox!" />
    <input type="file" @input="bindIframeImg('img-1', $event)" accept="image/gif, image/jpeg, image/png" />
    <input type="text" @input="bindIframeText('text-1', $event)" v-model="bindedText['text-1']" />
    <iframe :srcdoc="iframeSrcdoc" ref="iframe"></iframe>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import IframeBinder from "./components/IframeBinder";

export default {
  name: "App",
  mixins: [IframeBinder],
  components: {
    HelloWorld, IframeBinder
  },
  data () {
    return {
      bindedImg: {
        'img-1': 'https://picsum.photos/200/300'
      },
      bindedText: {
        'text-1': 'asdf'
      },
      iframeSrc: `
    <!doctype html>
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
      <head>
        <title>
          
        </title>
        <!--[if !mso]><!-- -->
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <!--<![endif]-->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style type="text/css">
          #outlook a { padding:0; }
          .ReadMsgBody { width:100%; }
          .ExternalClass { width:100%; }
          .ExternalClass * { line-height:100%; }
          body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }
          table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }
          img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }
          p { display:block;margin:13px 0; }
        </style>
        <!--[if !mso]><!-->
        <style type="text/css">
          @media only screen and (max-width:480px) {
            @-ms-viewport { width:320px; }
            @viewport { width:320px; }
          }
        </style>
        <!--<![endif]-->
        <!--[if mso]>
        <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
        <!--[if lte mso 11]>
        <style type="text/css">
          .outlook-group-fix { width:100% !important; }
        </style>
        <![endif]-->
        
      <!--[if !mso]><!-->
        <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css">
        <style type="text/css">
          @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);
        </style>
      <!--<![endif]-->

    
        
    <style type="text/css">
      @media only screen and (min-width:480px) {
        .mj-column-per-100 { width:100% !important; max-width: 100%; }
.mj-column-per-33 { width:33.333333333333336% !important; max-width: 33.333333333333336%; }
      }
    </style>
    
  
        <style type="text/css">
        
        

    @media only screen and (max-width:480px) {
      table.full-width-mobile { width: 100% !important; }
      td.full-width-mobile { width: auto !important; }
    }
  
        </style>
        
        
      </head>
      <body>
        
        
      <div
         style=""
      >
        
      
      <!--[if mso | IE]>
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
    
      
      <div  style="Margin:0px auto;max-width:600px;">
        
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"
        >
          <tbody>
            <tr>
              <td
                 style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"
              >
                <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="" style="vertical-align:top;width:600px;"
            >
          <![endif]-->
            
      <div
         class="mj-column-per-100 outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
      >
        
      <table
         border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#a31c1c;vertical-align:top;" width="100%"
      >
        
            <tr>
              <td
                 align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"
              >
                
      <table
         border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"
      >
        <tbody>
          <tr>
            <td  style="width:550px;">
              
      <img
          id="img-1"
         height="auto" src="https://api-sa-email-builder.kevingermain.com/images/d5e65f2d-1aff-4f4d-a9cd-fd09bfe96259/1ea3f5fd-bb6e-4ed5-b047-0825e3ff20f5.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="550"
      />
    
            </td>
          </tr>
        </tbody>
      </table>
    
              </td>
            </tr>
          
      </table>
    
      </div>
    
          <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    
      
      <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
    
      
      <div  style="Margin:0px auto;max-width:600px;">
        
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"
        >
          <tbody>
            <tr>
              <td
                 style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"
              >
                <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="" style="vertical-align:top;width:200px;"
            >
          <![endif]-->
            
      <div
         class="mj-column-per-33 outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
      >
        
      <table
         border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
      >
        
            <tr>
              <td
                 align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"
              >
                
      <div
         style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;"
      ><h1 style="text-align: left;" id='text-1'>A title here!</h1></div>
    
              </td>
            </tr>
          
            <tr>
              <td
                 align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"
              >
                
      <div
         style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;"
      ><h1 style="text-align: left;">A title here!</h1></div>
    
              </td>
            </tr>
          
            <tr>
              <td
                 align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"
              >
                
      <div
         style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;"
      ><h1 style="text-align: left;">A title here!</h1></div>
    
              </td>
            </tr>
          
            <tr>
              <td
                 align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"
              >
                
      <div
         style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;"
      ><h1 style="text-align: left;">A title here!</h1></div>
    
              </td>
            </tr>
          
      </table>
    
      </div>
    
          <!--[if mso | IE]>
            </td>
          
            <td
               class="" style="vertical-align:top;width:200px;"
            >
          <![endif]-->
            
      <div
         class="mj-column-per-33 outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
      >
        
      <table
         border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
      >
        
            <tr>
              <td
                 align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"
              >
                
      <div
         style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;"
      ><div><span>Lorem ipsum dolor sit amet, <strong>TBTY</strong><i>consectetur</i> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</span></div></div>
    
              </td>
            </tr>
          
            <tr>
              <td
                 align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"
              >
                
      <div
         style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;"
      ><div><span>Lorem ipsum dolor sit amet, <strong>TBTY</strong><i>consectetur</i> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</span></div></div>
    
              </td>
            </tr>
          
      </table>
    
      </div>
    
          <!--[if mso | IE]>
            </td>
          
            <td
               class="" style="vertical-align:top;width:200px;"
            >
          <![endif]-->
            
      <div
         class="mj-column-per-33 outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
      >
        
      <table
         border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
      >
        
            <tr>
              <td
                 align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"
              >
                
      <table
         border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"
      >
        <tbody>
          <tr>
            <td  style="width:150px;">
              
      <img
         height="auto" src="https://api-sa-email-builder.kevingermain.com/images/d5e65f2d-1aff-4f4d-a9cd-fd09bfe96259/d1962d93-5669-4983-ac2f-703f3ccc75ed.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="150"
      />
    
            </td>
          </tr>
        </tbody>
      </table>
    
              </td>
            </tr>
          
      </table>
    
      </div>
    
          <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    
      
      <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <![endif]-->
    
    
      </div>
      </body>
    </html>
      `
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
