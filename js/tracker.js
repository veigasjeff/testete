// googlescript.js

(function () {
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-K66D167PL8';
  
    document.head.appendChild(script);
  
    script.onload = function () {
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-K66D167PL8');
    };
  })();
