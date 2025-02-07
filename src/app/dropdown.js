"use client";
import React, { useState, useEffect } from "react";

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
    <div style={{ marginBottom: "1rem" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <strong>Question {questionNumber}:</strong>{" "}
          <span dangerouslySetInnerHTML={{ __html: questionText }} />
        </div>
        <button
          onClick={() => setShowAnswer((prev) => !prev)}
          style={{ marginLeft: "1rem" }}
        >
          {showAnswer ? "Hide Answer" : "Show Answer"}
        </button>
      </div>
      {showAnswer && (
        <div
          style={{ marginTop: "0.5rem" }}
          dangerouslySetInnerHTML={{ __html: answerText }}
        />
      )}
    </div>
  );
}

export default function ToggleContent() {
  const [data, setData] = useState([]);
  // State to control the visibility of the entire section (title + file list)
  const [sectionExpanded, setSectionExpanded] = useState(true);

  const title = "Astronomical Aspects";

  useEffect(() => {
    fetchFiles("src/app/QNA/sec1") // Example folder inside your project
      .then(setData)
      .catch(console.error);
  }, []);

  const toggleSection = () => {
    setSectionExpanded((prev) => !prev);
  };

  return (
    <div>
      {/* Section header with a clickable title and toggle button */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2
          style={{ marginRight: "1rem", cursor: "pointer" }}
          onClick={toggleSection}
        >
          {title}
        </h2>
        <button onClick={toggleSection}>
          {sectionExpanded ? "Hide Section" : "Show Section"}
        </button>
      </div>
      {/* Render the file listings only if the section is expanded */}
      {sectionExpanded &&
        data.map(({ file, content }, index) => (
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
