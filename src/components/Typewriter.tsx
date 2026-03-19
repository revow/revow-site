"use client";
import { useEffect, useState } from "react";

const phrases = [
  "monitor funnels in real time",
  "detect revenue leaks before they hurt",
  "get intelligent alerts when it matters",
  "talk to your data through AI",
];

export default function Typewriter() {
  const [text, setText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[phraseIdx];
    const speed = deleting ? 25 : 45;

    if (!deleting && charIdx === phrase.length) {
      const t = setTimeout(() => setDeleting(true), 2500);
      return () => clearTimeout(t);
    }
    if (deleting && charIdx === 0) {
      setDeleting(false);
      setPhraseIdx((prev) => (prev + 1) % phrases.length);
      return;
    }

    const t = setTimeout(() => {
      setText(phrase.substring(0, deleting ? charIdx - 1 : charIdx + 1));
      setCharIdx((prev) => prev + (deleting ? -1 : 1));
    }, speed);
    return () => clearTimeout(t);
  }, [charIdx, deleting, phraseIdx]);

  return (
    <span className="text-accent">
      {text}
      <span className="cursor" />
    </span>
  );
}
