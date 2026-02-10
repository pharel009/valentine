"use client";
import { useEffect, useState } from "react";

type Heart = {
  id: number;
  left: string;
  size: string;
  duration: string;
  emoji: string;
};

const emojis = ["💖", "💕", "💘", "💝"];

const HeartConfetti = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now() + Math.random();

      setHearts((prev) => [
        ...prev,
        {
          id,
          left: `${Math.random() * 100}%`,
          size: `${Math.random() * 20 + 18}px`,
          duration: `${Math.random() * 2 + 4}s`,
          emoji: emojis[Math.floor(Math.random() * emojis.length)],
        },
      ]);

      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== id));
      }, 6000);
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="heart"
          style={{
            left: heart.left,
            fontSize: heart.size,
            animationDuration: heart.duration,
          }}
        >
          {heart.emoji}
        </span>
      ))}
    </div>
  );
};

export default HeartConfetti;
