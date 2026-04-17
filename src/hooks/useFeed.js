import { useState, useEffect } from "react";
import { updateUserVector } from "../engine/updater";
import { applyDecay } from "../engine/decay";
import { normalize } from "../engine/vector";
import { tags } from "../config/tags";

export default function useFeed() {
  const [userVector, setUserVector] = useState({});

  useEffect(() => {
    localStorage.setItem("userVector", JSON.stringify(userVector));
  }, [userVector]);

  useEffect(() => {
    const storedVector = localStorage.getItem("userVector");
    if (storedVector) {
      setUserVector(JSON.parse(storedVector));
    } else {
      const initialVector = {};
      tags.forEach((tag) => (initialVector[tag] = 0));
      setUserVector(initialVector);
      console.log("Initialized user vector:", initialVector);
    }
  }, []);

  function resetUserVector() {
    localStorage.removeItem("userVector");
    setUserVector({});
  }

  function interact(action, card) {
    let updatedVector = { ...userVector };
    updatedVector = applyDecay(updatedVector);
    updatedVector = updateUserVector(updatedVector, action, card);
    updatedVector = normalize(updatedVector);
    setUserVector(updatedVector);
  }

  return { resetUserVector, interact, userVector };
}
