import styles from './styles/App.module.css';
import Feed from './components/Feed';

function App() {
  return (
    <div className={styles.app}>
      <Feed />
    </div>
  );
}

export default App;
