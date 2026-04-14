export const ACTIONS = ["like", "click", "comment", "dislike"];

export function validateCard(card) {
  return Array.isArray(card.tags);
}