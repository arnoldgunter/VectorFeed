import Card from "./Card";
import { cards } from "../data/cards";
import useFeed from "../hooks/useFeed";
import styles from "../styles/Feed.module.css";

function Feed() {
  const { resetUserVector, interact, feed } = useFeed();

  return (
    <div className={styles.feed}>
      <div className={styles.header}>
        <h1 className={styles.title}>User Feed</h1>
        <button className={styles.resetButton} onClick={resetUserVector}>Reset User Preferences</button>
        <button onClick={feed}>Log Feed</button>
      </div>
      <div className={styles.cardsContainer}>
        {cards.map((card, index) => (
          <Card key={index} content={card} onClick={() => interact("click", card)}/>
        ))}
      </div>
    </div>
  );
}

export default Feed;