// decay.js:
// This module is responsible for time-based reduction of the user vector so that older interests gradually lose influence.
// Each tag value is multiplied by a decay factor derived from the time elapsed since the last interaction.
// The decay is typically exponential, ensuring smooth and continuous fading of preferences instead of abrupt changes.
// The goal is to keep the recommendation system dynamic and prevent outdated interests from dominating the feed.