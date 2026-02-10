"use client";
import { useState } from "react";
import Container from "../components/container";
import HeartConfetti from "../components/heartConfetti";
import Image from "next/image";

const messages = [
  "Pleaseee click YES 🥺",
  "Why are you resisting love 😭",
  "My heart is waiting 💔",
  "Just say YES already 😩",
  "I promise snacks and love 💕",
];

const gif = "/love2.gif";

const Surprise = () => {
  const [showNo, setShowNo] = useState(true);
  const [step, setStep] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const [popup, setPopup] = useState<{
    id: number;
    text: string;
    top: string;
    left: string;
  } | null>(null);
  const [isLeaving, setIsLeaving] = useState(false);
  const [selectedGif, setSelectedGif] = useState<string | null>(null);

  const spawnPopup = () => {
    if (accepted) return; // 👈 stop once YES is clicked

    const msg = messages[step % messages.length];

    setPopup({
      id: Date.now(),
      text: msg,
      top: `${Math.random() * 70 + 10}%`,
      left: `${Math.random() * 70 + 10}%`,
    });

    setStep((prev) => prev + 1);
  };

  const handleNoClick = () => {
    setShowNo(false);
    spawnPopup();
  };

  const handleYesClick = () => {
    setAccepted(true);
    setShowNo(false);

    // 👇 clear popup immediately
    setPopup(null);
    setIsLeaving(false);

    setSelectedGif(gif);
  };

  const handlePopupClick = () => {
    setIsLeaving(true);

    setTimeout(() => {
      setPopup(null);
      setIsLeaving(false);
      spawnPopup();
    }, 300); // matches animation duration
  };

  return (
    <div className="bg-purple-700/70 min-h-screen flex items-center justify-center">
      {/* confetti */}
      {accepted && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
          <HeartConfetti />
        </div>
      )}

      {/* popups */}
      {popup && (
        <div
          onClick={handlePopupClick}
          className={`
      fixed px-4 py-2 rounded-xl shadow-lg text-sm cursor-pointer
      bg-white
      transition-all duration-300 ease-in-out hover:scale-105 hover:bg-pink-50
      ${isLeaving ? "opacity-0 scale-90" : "opacity-100 scale-100"}
    `}
          style={{ top: popup.top, left: popup.left }}
        >
          {popup.text}
        </div>
      )}

      <Container className="bg-white">
        <div className="flex flex-col items-center text-center space-y-4">
          {!accepted ? (
            <span className="text-6xl animate-slow-bounce">💘</span>
          ) : (
            selectedGif && (
              <Image
                src={selectedGif}
                alt="love"
                width={128} // adjust size
                height={128}
                className="mx-auto rounded-full object-cover shadow-lg animate-scale-in"
                priority // optional: loads immediately
                unoptimized
              />
            )
          )}

          <p className="text-red-500 text-sm font-medium">Engelberta Ozioma</p>
          <h2 className="text-xl font-semibold text-gray-800">
            {!accepted ? (
              <>
                Hey Beautiful, <br /> Will you be my valentine?
              </>
            ) : (
              <>
                Thank you, my love 💖 <br />
                You just made my heart so happy!
              </>
            )}
          </h2>
          <div
            className={`flex items-center gap-4 mt-2 ${
              showNo ? "" : "justify-center"
            }`}
          >
            <button
              className="bg-red-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-red-600 transition cursor-pointer"
              onClick={handleYesClick}
            >
              {accepted ? "Yay! I love you 💖" : "Yes 💖"}
            </button>
            {showNo && (
              <button
                className="border border-black/60 px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition cursor-pointer"
                onClick={handleNoClick}
              >
                No
              </button>
            )}
          </div>

          {!accepted && (
            <p className="text-xs text-gray-500">
              I dare you… click <span className="font-semibold">NO</span> if you
              can 😃
            </p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Surprise;
