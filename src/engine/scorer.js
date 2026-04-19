// scorer.js:
// This module calculates the relevance score of each card for the current user.
// It compares the user vector with the card tag vector, typically using a dot product (scalar product).
// The resulting score represents how well a card matches the user's current interests.
// These scores are later used to rank and sort the feed.

export function scoreCard(userVector, card) {
  if (!card.tags || card.tags.length === 0) return 0;

  let sum = 0;

  card.tags.forEach((tag) => {
    if (userVector[tag] !== undefined) {
      sum += userVector[tag];
    }
  });

  const score = sum / card.tags.length;

  return score;
}
