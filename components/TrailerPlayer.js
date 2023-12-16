// components/VideoPlayer.js
import styles from '../styles/VideoPlayer.module.css'; // Import the CSS module

const TrailerPlayer = ({ embedUrl }) => {
  // const embedUrlWithParams = `${embedUrl}?autoplay=1&mute=1`;
  return (
    <div className={styles.videoPlayer}>
      <div className={styles.videoWrapper}>
        <iframe
          src={embedUrl}
          width="800"
          height="450"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          autoPlay
          muted
          title="trailer-player"
          style={{
           filter: `
          contrast(1.1) 
          saturate(1.2)
          brightness(1.3)
          hue-rotate(-5deg)
        `,
        border: '1px solid white', // Add white border with a radius of 2px
        borderRadius: '20px', // Add border radius
          }}></iframe>
      </div>
      
    </div>
  );
};

export default TrailerPlayer;
