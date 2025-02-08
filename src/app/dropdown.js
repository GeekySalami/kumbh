"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CiCircleChevUp, CiCircleChevDown } from "react-icons/ci";
import { GiSpotedFlower } from "react-icons/gi";

async function fetchFiles(folderPath) {
  const res = await fetch(`/api/read-files?folder=${encodeURIComponent(folderPath)}`);
  if (!res.ok) throw new Error("Failed to fetch files");
  return res.json();
}

// Component to render a single question & answer
function QuestionAnswer({ content }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const questionMatch = content.match(/<question>([\s\S]*?)<\/question>/i);
  const answerMatch = content.match(/<answer>([\s\S]*?)<\/answer>/i);

  const questionText = questionMatch ? questionMatch[1] : "No question found.";
  const answerText = answerMatch ? answerMatch[1] : "No answer found.";

  return (
    <div className="kurale-regular">
      <div className="flex items-center">
        <div className="flex cursor-pointer hover:text-black dark:hover:text-red-900 transition-all ease-in-out" onClick={() => setShowAnswer((prev) => !prev)}  >
          <GiSpotedFlower className="w-9 h-9 flex-none" /> &nbsp;
          <span className="mt-1 text-xl" dangerouslySetInnerHTML={{ __html: questionText }} />
        </div>
        <button onClick={() => setShowAnswer((prev) => !prev)} className="ml-auto">
          {showAnswer ? <CiCircleChevUp className="size-8 hover:text-black dark:hover:text-red-900 transition-all ease-in-out" /> : <CiCircleChevDown className="hover:text-black size-8 dark:hover:text-red-900 transition-all ease-in-out" />}
        </button> 
      </div>

      {/* Animate answer */}
      <AnimatePresence>
        {showAnswer && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="pt-4 pl-4 overflow-hidden"
          >
            <div dangerouslySetInnerHTML={{ __html: answerText }} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Main component that handles fetching and toggling all Q&A items
export default function ToggleContent() {
  const [data, setData] = useState([]);
  const [sectionExpanded, setSectionExpanded] = useState(true);

  useEffect(() => {
    fetchFiles("src/app/QNA2")
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <div className="">
      {/* Toggle Button */}
      

      {/* Animate Q&A Section */}
      <AnimatePresence>
        {sectionExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden mt-4"
          >
            {data.map(({ file, content }, index) => (
              <div key={index} className="p-4 border-b-2 border-red-900 dark:border-white">
                <QuestionAnswer content={content} />
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
