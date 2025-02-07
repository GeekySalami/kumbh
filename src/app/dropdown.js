"use client";
import { CircleChevronUp } from "lucide-react";
import React, { useState, useEffect } from "react";
import { CiCircleChevUp } from "react-icons/ci";
import { CiCircleChevDown } from "react-icons/ci";
import { GiSpotedFlower } from "react-icons/gi";

async function fetchFiles(folderPath) {
  const res = await fetch(
    `/api/read-files?folder=${encodeURIComponent(folderPath)}`
  );
  if (!res.ok) throw new Error("Failed to fetch files");
  return res.json();
}

// Component to render a question with its toggleable answer,
// including an enumeration number for the question.
function QuestionAnswer({ content, questionNumber }) {
  const [showAnswer, setShowAnswer] = useState(false);

  // Extract the content between <question> and </question>
  const questionMatch = content.match(/<question>([\s\S]*?)<\/question>/i);
  // Extract the content between <answer> and </answer>
  const answerMatch = content.match(/<answer>([\s\S]*?)<\/answer>/i);

  const questionText = questionMatch ? questionMatch[1] : "No question found.";
  const answerText = answerMatch ? answerMatch[1] : "No answer found.";

  return (
    <div className="kurale-regular" >
      <div style={{ display: "flex", alignItems: "center" }} >
        <div className="flex ">
          <GiSpotedFlower className="size-9"/> &nbsp;
          <span className="mt-1 text-xl" dangerouslySetInnerHTML={{ __html: questionText }} />
        </div>
        <button
          onClick={() => setShowAnswer((prev) => !prev)}
          className="ml-auto"
        >
          {showAnswer ? <CiCircleChevUp className="size-8"/> : <CiCircleChevDown className="size-8"/>}
        </button>
      </div>
      {showAnswer && (<div>
        <div className="text-xl"><strong>Answer:</strong></div>
        <div
          dangerouslySetInnerHTML={{ __html: answerText }}
        />
        </div>
      )}
    </div>
  );
}

export default function ToggleContent() {
  const [data, setData] = useState([]);
  // State to control the visibility of the entire section (file list)
  const [sectionExpanded, setSectionExpanded] = useState(true);

  useEffect(() => {
    fetchFiles("src/app/QNA2") // Example folder inside your project
      .then(setData)
      .catch(console.error);
  }, []);

  const toggleSection = () => {
    setSectionExpanded((prev) => !prev);
  };

  return (
    <div>
  
      {data.map(({ file, content }, index) => (
          <div
            key={index}
            style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}
          >
            {/* Pass the index + 1 to enumerate the questions */}
            <QuestionAnswer content={content} questionNumber={index + 1} />
          </div>
        ))}
    </div>
  );
}
