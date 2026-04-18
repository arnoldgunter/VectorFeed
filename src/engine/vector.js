// vector.js:
// This module contains all core mathematical vector operations.
// It includes normalization (unit vector conversion), dot product computation, and helper functions
// to ensure numerical stability across the recommendation pipeline.
// The purpose is to centralize all vector math so other modules remain clean and focused.

export function normalize(vector) {
  const magnitude = Math.sqrt(
    Object.values(vector).reduce((sum, val) => sum + val * val, 0),
  );
  if (magnitude === 0) return vector; // Avoid division by zero
  const normalizedVector = {};
  for (const key in vector) {
    normalizedVector[key] = vector[key] / magnitude;
  }
  return normalizedVector;
}

export function dotProduct(vecA, vecB) {
  let product = 0;
  for (const key in vecA) {
    if (vecB[key] !== undefined) {
      product += vecA[key] * vecB[key];
    }
  }
  return product;
}
