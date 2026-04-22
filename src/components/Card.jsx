import styles from "../styles/Card.module.css";

export default function Card({ content, onClick }) {
  return (
    <div className={styles.card} onClick={onClick}>
      <p className={styles.cardContent}>{content.text}</p>
      <div className={styles.cardTags}>
        {content.tags.map((tag, index) => (
          <span key={index} className={styles.tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
}
