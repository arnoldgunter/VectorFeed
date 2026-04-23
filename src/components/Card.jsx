import styles from "../styles/Card.module.css";
import InteractionBar from "./InteractionBar";

export default function Card({ content, onLike, onDislike, onComment, onClick }) {
  return (
    <div className={styles.card} onClick={onClick}>
      <p className={styles.cardContent}>{content.text}</p>
      <div className={styles.cardTags}>
        {content.tags.map((tag, index) => (
          <span key={index} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
      <InteractionBar onLike={onLike} onDislike={onDislike} onComment={onComment} />
    </div>
  );
}
