import './App.css';
import styles from './styles.module.css';

function App() {
  return (
    <div className={styles['container']}  >
      <div className={styles['slide-bar']}>Left-Side</div>
      <div className={styles['content']}>Right-Side</div>
    </div>
  );
}

export default App;
