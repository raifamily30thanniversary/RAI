var canvas = document.createElement('canvas');
let gl;
var vendor, debugInfo, renderer;

var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]"
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1 - 79
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

// Edge (based on chromium) detection
var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);

try {
    gl = canvas.getContext('webgl', { powerPreference: "high-performance" }) || canvas.getContext('experimental-webgl', { powerPreference: "high-performance" });
} catch (e) {
  alert('Welcome to the RAI 30th Anniversary Microsite. In order to experience our journey, you must enable <b> Hardware Acceleration </b> in your browser settings.');
}

if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))){
  if (gl) {
    debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
    renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
    console.log(debugInfo);
    console.log(vendor);
    console.log(renderer);
    if(renderer.toLowerCase().includes('google')){
      functionConfirm('Welcome to the RAI 30th Anniversary Microsite. In order to experience our journey, you must enable <b> Hardware Acceleration </b> in your browser settings.');
    }
    else if(renderer.toLowerCase().includes('firefox') || vendor.toLowerCase().includes('geck')){
      functionConfirm('Welcome to the RAI 30th Anniversary Microsite. In order to experience our journey, you must enable <b> Hardware Acceleration </b> in your browser settings.');
    }
    else if(renderer.toLowerCase().includes('opera')){
      functionConfirm('Welcome to the RAI 30th Anniversary Microsite. In order to experience our journey, you must enable <b> Hardware Acceleration </b> in your browser settings.');
    }

    const cl = document.createElement('canvas').getContext('webgl2');
    if (!cl && isSafari) {
      functionConfirm('Welcome to the RAI 30th Anniversary Microsite.<br> <br><b> NOTE* </b> This website is best viewd in <b>Google Chrome OR Firefox Browser </b>. <br> <br>In order to experience our journey in Safari Browser, you must enable <b> WebGL 2.0 </b> in your browser settings.');
    }
  }
}



function openLinkNewTab(pageLink){
  const link = document.createElement('a');
  link.href = pageLink;
  document.body.appendChild(link);
  link.click();
  // Clean up and remove the link
  link.parentNode.removeChild(link);
}


function functionConfirm(msg)
{
   var confirmBox = $("#confirm");
   confirmBox.find(".message").html(msg);
   confirmBox.find(".yes,.no").unbind().click(function()
   {
     confirmBox.hide();
   });
   confirmBox.find(".yes").click(()=>{
     if(isOpera){
      openLinkNewTab('https://raifamily30thanniversary.com/TemplateData/Hardware-Acceleration-Guide-Opera.pdf');

     }else if(isFirefox){
       openLinkNewTab('https://raifamily30thanniversary.com/TemplateData/Hardware-Acceleration-Guide-Firefox.pdf');
     } else if(isEdge){
       openLinkNewTab('https://raifamily30thanniversary.com/TemplateData/Hardware-Acceleration-Guide-Edge.pdf');
     }else if(isSafari){
      openLinkNewTab('https://raifamily30thanniversary.com/TemplateData/Hardware-Acceleration-Guide-Safari.pdf');
     }
     else{
      openLinkNewTab('https://raifamily30thanniversary.com/TemplateData/Hardware-Acceleration-Guide-Chrome.pdf');
     }

   });
   confirmBox.show();
}
