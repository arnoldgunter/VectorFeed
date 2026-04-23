import { useState, useEffect, useMemo } from "react";
import { updateUserVector } from "../engine/updater";
import { normalize } from "../engine/vector";
import { applyDecay } from "../engine/decay";
import { tags } from "../config/tags";
import { scoreCard } from "../engine/scorer";
import { cards } from "../data/cards";
import { injectNewCards } from "../engine/explorer";

function createInitialVector() {
  return tags.reduce((acc, tag) => {
    acc[tag] = 0;
    return acc;
  }, {});
}

export default function useFeed() {
  const [userVector, setUserVector] = useState(() => {
    const stored = localStorage.getItem("userVector");
    return stored ? JSON.parse(stored) : createInitialVector();
  });

  useEffect(() => {
    localStorage.setItem("userVector", JSON.stringify(userVector));
  }, [userVector]);

  function resetUserVector() {
    const fresh = createInitialVector();
    setUserVector(fresh);
    localStorage.setItem("userVector", JSON.stringify(fresh));
  }

  function interact(action, card) {
    let updatedVector = { ...userVector };
    const clickedTags = card.tags || [];

    updatedVector = applyDecay(updatedVector, clickedTags);
    updatedVector = updateUserVector(updatedVector, action, card);
    updatedVector = normalize(updatedVector);

    setUserVector(updatedVector);
  }
  
  const feed = useMemo(() => {
    const scored = cards
      .map((card) => ({
        ...card,
        score: scoreCard(userVector, card),
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 100);

    const withExploration = injectNewCards(scored, cards);

    return withExploration;
  }, [userVector]);

  return { userVector, resetUserVector, interact, feed };
}
