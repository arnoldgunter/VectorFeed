import styles from "../styles/InteractionBar.module.css";

export default function InteractionBar({ onLike, onDislike, onComment }) {
  return (
    <div className={styles.interactionBar}>
      <img
        src="/thumb_up.svg"
        alt="Like"
        className={styles.icon}
        onClick={onLike}
      />
      <img
        src="/thumb_down.svg"
        alt="Dislike"
        className={styles.icon}
        onClick={onDislike}
      />
      <img
        src="/comment.svg"
        alt="Comment"
        className={styles.icon}
        onClick={onComment}
      />
    </div>
  );
}