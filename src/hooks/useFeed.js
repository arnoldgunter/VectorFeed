import { useState, useEffect } from "react";
import { updateUserVector } from "../engine/updater";
import { normalize } from "../engine/vector";
import { applyDecay } from "../engine/decay";
import { tags } from "../config/tags";

const initialVector = tags.reduce((acc, tag) => {
  acc[tag] = 0;
  return acc;
}, {});

export default function useFeed() {
  const [userVector, setUserVector] = useState(initialVector);

  useEffect(() => {
    localStorage.setItem("userVector", JSON.stringify(userVector));
  }, [userVector]);

  useEffect(() => {
    const storedVector = localStorage.getItem("userVector");
    if (storedVector) {
      setUserVector(JSON.parse(storedVector));
    }
  }, []);

  function resetUserVector() {
    setUserVector(initialVector);
  }

  function interact(action, card) {
    let updatedVector = { ...userVector };
    let clickedTags = card.tags || [];
    updatedVector = applyDecay(updatedVector, clickedTags);
    updatedVector = updateUserVector(updatedVector, action, card);
    updatedVector = normalize(updatedVector);
    setUserVector(updatedVector);
  }

  return { resetUserVector, interact, userVector };
}
