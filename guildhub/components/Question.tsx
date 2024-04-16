"use client";

import "@/styles/questions.scss";

interface questionProps {
  question: string;
  respond: string;
}

const Question: React.FC<questionProps> = ({ question, respond }) => {
  return (
    <div className="question">
      <div className="question-top">
        <div className="question-top-wrapper">
          <img
            src="https://www.svgrepo.com/show/521479/arrow-next-small.svg"
            alt="Expand arrow"
            className="question-top-wrapper-image"
          />
        </div>
        <h1 className="question-top-text">{question}</h1>
      </div>
      <div className="question-bot">
        <p className="question-bot-text">{respond}</p>
      </div>
    </div>
  );
};

export default Question;
