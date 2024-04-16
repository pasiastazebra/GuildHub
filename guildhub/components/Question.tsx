"use client";

interface questionProps {
  question: string;
  respond: string;
}

const Question: React.FC<questionProps> = ({ question, respond }) => {
  return (
    <div>
      <div>{question}</div>
      <div>{respond}</div>
    </div>
  );
};

export default Question;
