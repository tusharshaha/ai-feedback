"use client" 

import React, { useState, useEffect } from "react";

type StreamingResponseProps = {
  response: string;
  typingSpeed?: number; // Speed of the typing effect in milliseconds
};

const StreamingResponse: React.FC<StreamingResponseProps> = ({
  response,
  typingSpeed = 50, // Default typing speed
}) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < response.length) {
        setDisplayedText((prev) => prev + response[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [response, typingSpeed]);

  return (
    <div className="whitespace-pre-wrap text-gray-800 font-mono">
      {displayedText}
    </div>
  );
};

export default StreamingResponse;
