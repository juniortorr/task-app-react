import { Link } from 'react-router-dom';
import styles from '../styles/Error.module.scss';
export default function Error() {
  return (
    <div className={styles.error}>
      <h2>Whoops</h2>
      <h3>This project cannot be found</h3>
      <Link to={'/'}>Return Home</Link>
    </div>
  );
}
