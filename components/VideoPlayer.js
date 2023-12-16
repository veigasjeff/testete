// // components/VideoPlayer.js
// import styles from '../styles/VideoPlayer.module.css'; // Import the CSS module


// const VideoPlayer = ({ videoUrl }) => {
 
//   return (
//     <div className={styles.videoPlayer}>
//       <div className={styles.videoWrapper}>
//         <iframe
//           src={videoUrl}
//           width="800"
//           height="450"
//           frameBorder="0"
//           allow="autoplay; fullscreen"
//           allowFullScreen
//           title="movie-player"
//           style={{
//             filter: `
//            contrast(1.1) 
//            saturate(1.2)
//            brightness(1.3)
//            hue-rotate(-5deg)
//          `,
//            }}></iframe>
//       </div>
      
//     </div>
//   );
// };

// export default VideoPlayer;

// components/VideoPlayer.js
// components/VideoPlayer.js
import React, { useState, useEffect } from 'react';
import styles from '../styles/VideoPlayer.module.css'; // Import the CSS module
import adStyles from '../styles/VideoAdOverlay.module.css'; // Import the ad overlay CSS module

const VideoPlayer = ({ videoUrl, adUrl }) => {
  const [showAd, setShowAd] = useState(true);
  const [showSkipButton, setShowSkipButton] = useState(false);

  useEffect(() => {
    const adTimer = setTimeout(() => {
      setShowSkipButton(true);
    }, 5000); // Show skip button after 5 seconds

    return () => clearTimeout(adTimer);
  }, []);

  const handleSkipAd = () => {
    setShowAd(false);
  };

  const handleAdComplete = () => {
    setShowAd(false);
  };

  return (
    <div className={styles.videoPlayer}>
      <div className={styles.videoWrapper}>
        {showAd ? (
          <div className={adStyles.overlay}>
            <video
              src="/movie/official-trailer.mp4"
              width="800"
              height="450"
              frameBorder="0"
              controls
              autoPlay
              muted
              playsInline
              title="ad-player"
              onEnded={handleAdComplete}
            ></video>
            {showSkipButton && (
              <button
                className={adStyles.skipButton}
                onClick={handleSkipAd}
                disabled={!showSkipButton}
              >
                Skip Ad
              </button>
            )}
            {!showSkipButton && (
              <p className={adStyles.message}>Video will resume shortly...</p>
            )}
          </div>
        ) : (
          <iframe
            src={videoUrl}
            width="800"
            height="450"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="movie-player"
            style={{
              filter: `
               contrast(1.1) 
               saturate(1.2)
               brightness(1.3)
               hue-rotate(-5deg)
             `,
             border: '1px solid white', // Add white border with a radius of 2px
             borderRadius: '20px', // Add border radius
            }}
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
