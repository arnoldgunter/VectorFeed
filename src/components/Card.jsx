export default function Card({ content }) {
  return (
    <div className="Card">
      <h2>Card</h2>
      <p>Content: {content.text}</p>
      <p>Tags: {content.tags.join(", ")}</p>
    </div>
  );
}
