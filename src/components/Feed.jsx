import Card from "./Card";
import useFeed from "../hooks/useFeed";
import styles from "../styles/Feed.module.css";
import UserChart from "./UserChart";

function Feed() {
  const { resetUserVector, interact, feed } = useFeed();

  return (
    <div className={styles.feed}>
      <div className={styles.header}>
        <h1 className={styles.title}>User Feed</h1>
        <button className={styles.resetButton} onClick={resetUserVector}>
          Reset User Preferences
        </button>
      </div>
      <div className={styles.content}>
        <div className={styles.cardsContainer}>
          {feed().map((card, index) => (
            <Card
              key={index}
              content={card}
              onClick={() => interact("click", card)}
            />
          ))}
        </div>
        <div className={styles.userChart}>
          <UserChart />
        </div>
      </div>
    </div>
  );
}

export default Feed;
