document.addEventListener("DOMContentLoaded", () => {

 class ViewportFixer {
  static fix() {
      if (ViewportFixer.checkMobile()) {
          let viewportMetaTag = document.querySelector("meta[name=viewport]");
          
          if (!viewportMetaTag) {
              viewportMetaTag = document.createElement('meta');
              viewportMetaTag.setAttribute('name', 'viewport');
              document.querySelector('head').appendChild(viewportMetaTag);
          }
          
          viewportMetaTag.setAttribute('content', 'width=375, user-scalable=no');
      }
  }
  
  static checkMobile() {
      let userAgent = navigator.userAgent;
      return !!(userAgent.match(/Android/i)
          || userAgent.match(/webOS/i)
          || userAgent.match(/iPhone/i)
          || userAgent.match(/iPod/i)
          || userAgent.match(/BlackBerry/i)
          || userAgent.match(/Windows Phone/i));
  }

}

ViewportFixer.fix();

});