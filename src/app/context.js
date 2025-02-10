"use client";
import { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext({
  language: "en",
  setLanguage: () => {}
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const storedLang = localStorage.getItem("language") || "en";
    setLanguage(storedLang);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
