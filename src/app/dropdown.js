"use client";
import { useState , useEffect} from "react";

const ToggleContent = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the folder path relative to the project root
    const folderPath = 'src/app/QNA/sec1';  // Example folder

    // Call the API to get files
    const fetchFiles = async () => {
      try {
        const response = await fetch(`/api/getFiles?folderPath=${folderPath}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch files');
        }

        const data = await response.json();
        setFiles(data.files);  // Set the files in the state
      } catch (err) {
        setError(err.message);  // Set the error in state if any
      }
    };

    fetchFiles();
  }, []); 

  return (
    <div className="p-4 border-none shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex border-none items-center justify-between w-full text-lg font-semibold">
        {title}
        <span className="hover:dark:text-red-900 hover:text-black hover:transition ease-in-out">{isOpen ? "▲" : "▼"}</span>
      </button>
      <hr/>
      {isOpen && (
        <div className="border-none">
          <ol>
          {files.length > 0 ? (
          files.map((file, index) => (
            <li key={index}>{file}</li>
          ))
        ) : (
          <p>No files found.</p>
        )}
          </ol>
        </div>
      )}
    </div>
  );
};

export default ToggleContent;
