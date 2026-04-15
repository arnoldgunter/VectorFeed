// updater.js:
// This module processes all user interactions (like, click, comment, dislike).
// Each interaction directly modifies the user vector by adding or subtracting predefined weights (ACTION_WEIGHTS)
// from the tags associated with the interacted card.
// It is responsible for learning user preferences incrementally based on behavior signals.