// Social Sharing Script
document.addEventListener('DOMContentLoaded', function () {
    const currentUrl = window.location.href;
    const pageTitle = document.title;
  
    // Facebook Share
    document.getElementById('facebook-share').href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  
    // WhatsApp Share
    document.getElementById('whatsapp-share').href = `https://api.whatsapp.com/send?text=${encodeURIComponent(pageTitle)}%20${encodeURIComponent(currentUrl)}`;
  
    // Twitter Share
    document.getElementById('twitter-share').href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(pageTitle)}&url=${encodeURIComponent(currentUrl)}`;
  
    // LinkedIn Share
    document.getElementById('linkedin-share').href = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
  
    // Telegram Share
    document.getElementById('telegram-share').href = `https://telegram.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(pageTitle)}`;
  
    // Email Share
    document.getElementById('email-share').href = `mailto:?subject=${encodeURIComponent(pageTitle)}&body=${encodeURIComponent(currentUrl)}`;
  });
  