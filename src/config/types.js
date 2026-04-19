export const ACTIONS = ["like", "click", "comment", "dislike"];

export const ACTION_WEIGHTS = {
  like: 2,
  click: 1,
  comment: 3,
  dislike: -2
};

export const DECAY_RATE = 0.99;

export function validateCard(card) {
  return Array.isArray(card.tags);
}