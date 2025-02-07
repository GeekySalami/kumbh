"use client";

import React, { useState, useEffect } from "react";

async function fetchFiles(folderPath) {
    const res = await fetch(`/api/read-files?folder=${encodeURIComponent(folderPath)}`);
    if (!res.ok) throw new Error("Failed to fetch files");
    return res.json();
  }
  
export default function MyComponent() {
    const [data, setData] = React.useState([]);
  
    React.useEffect(() => {
      fetchFiles("src/app/QNA/sec1") // Example folder inside your project
        .then(setData)
        .catch(console.error);
    }, []);
  
    return (
      <div>
        <h2>File Contents</h2>
        {data.map(({ file, content }, index) => (
          <div key={index}>
            <h3>{file}</h3>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        ))}
      </div>
    );
  }
  