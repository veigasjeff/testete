// googlescript.js

(function () {
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-8YNV1RQ326';
  
    document.head.appendChild(script);
  
    script.onload = function () {
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-8YNV1RQ326');
    };
  })();
