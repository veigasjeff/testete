// TvshowCard.js
import Link from 'next/link';
import styles from '../styles/TvShowCard.module.css'; // Corrected path for your CSS module

const TvshowCard = ({ id, title, thumbnail }) => {
  return (
    <div className={styles.tvshowCard}>
      <img className={styles.thumbnail} src={thumbnail} alt={title} />
      <Link href={`/tvshow/${id}`}>
        <div className={styles.playButton}>Play</div>
      </Link>
    </div>
  );
};

export default TvshowCard;
