import styles from "../styles/Card.module.css";

export default function Card({ content, onClick }) {
  return (
    <div className={styles.card} onClick={onClick}>
      <h2 className={styles.cardTitle}>Card</h2>
      <p className={styles.cardContent}>Content: {content.text}</p>
      <div className={styles.cardTags}>
        <span>Tags:</span>
        {content.tags.map((tag, index) => (
          <span key={index} className={styles.tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
}
