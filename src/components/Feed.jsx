import { useState } from "react";
import Card from "./Card";
import useFeed from "../hooks/useFeed";
import styles from "../styles/Feed.module.css";
import UserChart from "./UserChart";

function Feed() {
  const { resetUserVector, interact, feed, userVector } = useFeed();
  const [isChartExpanded, setIsChartExpanded] = useState(false);

  return (
    <div className={styles.feed}>
      <div className={styles.header}>
        <h1 className={styles.title}>User Feed</h1>
        <div className={styles.headerActions}>
          <button className={styles.resetButton} onClick={resetUserVector}>
            Reset User Preferences
          </button>
          <button 
            className={styles.toggleButton} 
            onClick={() => setIsChartExpanded(!isChartExpanded)}
          >
            {isChartExpanded ? 'Hide User Interest Chart' : 'Show User Interest Chart'}
          </button>
        </div>
      </div>
      <div className={styles.cardsContainer}>
        {feed.map((card, index) => (
          <Card
            key={index}
            content={card}
            onLike={() => interact("like", card)}
            onDislike={() => interact("dislike", card)}
            onComment={() => interact("comment", card)}
            onClick={() => interact("click", card)}
          />
        ))}
      </div>
      {isChartExpanded && (
        <div className={styles.chartOverlay}>
          <UserChart userVector={userVector} />
          <button 
            className={styles.closeButton} 
            onClick={() => setIsChartExpanded(false)}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}

export default Feed;
