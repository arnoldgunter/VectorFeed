import { useState, useEffect } from "react";
import { updateUserVector } from "../engine/updater";
import { applyDecay } from "../engine/decay";
import { normalize } from "../engine/vector";

export default function useFeed() {
  const [userVector, setUserVector] = useState({});

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
