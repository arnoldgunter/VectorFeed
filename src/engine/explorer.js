// explorer.js:
// This module injects randomness and diversity into the feed.
// In addition to top-ranked cards, it deliberately mixes in lower-ranked or random cards.
// This exploration mechanism helps discover new user interests and prevents the system from becoming too narrow or repetitive.

export function injectNewCards(scoredCards, allCards) {
    const top = [...scoredCards];
    const randomCards = allCards
        .slice()
        .sort(() => Math.random() - 0.5)
        .slice(0, 20);

    for (const card of randomCards) {
        const insertAt = Math.floor(Math.random() * (top.length + 1));
        top.splice(insertAt, 0, card);
    }

    return top;
}
