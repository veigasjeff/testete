// components/DisableInteractions.js
import { useEffect } from 'react';

const DisableInteractions = () => {
  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
      showMessage("You can't right-click. Right-click is disabled on this page.");
    };

    const handleSelectStart = (event) => {
      event.preventDefault();
      showMessage('Text selection is disabled on this page.');
    };

    const handleDragStart = (event) => {
      event.preventDefault();
      showMessage('Image dragging is disabled on this page.');
    };

    const showMessage = (message) => {
      removeMessages();

      const msgElement = document.createElement('div');
      msgElement.className = 'custom-message';
      msgElement.textContent = message;

      // Styling for the message
      msgElement.style.position = 'fixed';
      msgElement.style.bottom = '10px';
      msgElement.style.left = '50%';
      msgElement.style.transform = 'translateX(-50%)';
      msgElement.style.backgroundColor = 'rgba(220, 20, 60, 0.4)';
      msgElement.style.color = '#fff';
      msgElement.style.padding = '10px 20px';
      msgElement.style.border = '1px solid #fff';
      msgElement.style.borderRadius = '10px';
      msgElement.style.zIndex = '1000';

      document.body.appendChild(msgElement);

      setTimeout(() => {
        // Check if the element is still a child of the body before removing
        if (document.body.contains(msgElement)) {
          document.body.removeChild(msgElement);
        }
      }, 2000);
    };

    const removeMessages = () => {
      const existingMessages = document.querySelectorAll('.custom-message');
      existingMessages.forEach((msg) => {
        // Check if the element is still a child of the body before removing
        if (document.body.contains(msg)) {
          document.body.removeChild(msg);
        }
      });
    };

    // Attach event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('dragstart', handleDragStart);

    // Cleanup event listeners on unmount
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  return null; // This component does not render anything
};

export default DisableInteractions;
