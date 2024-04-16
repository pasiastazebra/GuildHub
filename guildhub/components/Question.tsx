"use client";

import "@/styles/questions.scss";
import { useState } from "react";

interface questionProps {
  question: string;
  respond: string;
}

const Question: React.FC<questionProps> = ({ question, respond }) => {
  const [isRolled, setRolled] = useState(true);

  const handleClick = () => {
    isRolled ? setRolled(false) : setRolled(true);
  };

  return (
    <div className="question">
      <div className="question-top">
        <div className="question-top-wrapper" onClick={handleClick}>
          <img
            src="https://www.svgrepo.com/show/521479/arrow-next-small.svg"
            alt="Expand arrow"
            className={`question-top-wrapper-image ${
              isRolled ? "rollin" : "rollout"
            }`}
          />
        </div>
        <h2 className="question-top-text">{question}</h2>
      </div>
      <div className={`question-bot ${isRolled ? "rollin" : "rollout"}`}>
        <div className="question-bot-wrapper">
          <p className="question-bot-wrapper-text">{respond}</p>
        </div>
      </div>
    </div>
  );
};

export default Question;
