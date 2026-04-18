// updater.js:
// This module processes all user interactions (like, click, comment, dislike).
// Each interaction directly modifies the user vector by adding or subtracting predefined weights (ACTION_WEIGHTS)
// from the tags associated with the interacted card.
// It is responsible for learning user preferences incrementally based on behavior signals.

import { ACTION_WEIGHTS } from "../config/types";

export function updateUserVector(userVector, action, card) {
  const weight = ACTION_WEIGHTS[action] || 0;
  const updatedVector = { ...userVector };

  card.tags.forEach((tag) => {
    if (updatedVector[tag] === undefined) {
      updatedVector[tag] = 0;
    }
    updatedVector[tag] += weight;
  });

  return updatedVector;
}