import Card from "./Card";
import { cards } from "../data/cards";

function Feed() {
  return (
    <div className="Feed">
      <h1>User Feed</h1>
        {cards.map((card, index) => (
          <Card key={index} content={card} />
        ))}
    </div>
  );
}

export default Feed;
