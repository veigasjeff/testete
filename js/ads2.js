      // Function to load the ad code
      function loadAdCode() {
        var adScript = document.createElement('script');
        adScript.async = true;
        adScript.setAttribute('data-cfasync', 'false');
        adScript.src = '//ophoacit.com/1?z=6437187';
        document.body.appendChild(adScript);
      }

      // Set a timeout to load the ad code after 5 seconds
      setTimeout(loadAdCode, 10000); // 5000 milliseconds = 5 seconds

