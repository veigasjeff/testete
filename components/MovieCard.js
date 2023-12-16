// components/MovieCard.js
import Link from 'next/link';
import styles from '../styles/MovieCard.module.css'; // Updated path for your CSS module

const MovieCard = ({ id, title, thumbnail  }) => {
  return (
    <div className={styles.movieCard}>
      <img className={styles.thumbnail} src={thumbnail} alt={title} />
      <Link href={`/movie/${id}`}>
   
          <div className={styles.playButton}>Play</div>
      
      </Link>
    </div>
  );
};

export default MovieCard;
