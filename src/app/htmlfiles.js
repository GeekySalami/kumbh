// import fs from 'fs';
// import path from 'path';
// // import cheerio from 'cheerio';
// import { load } from 'cheerio';

// export const getQuestionsAndAnswers = (folderPath) => {
//     const absoluteFolderPath = path.isAbsolute(folderPath)
//       ? folderPath
//       : path.join(process.cwd(), folderPath);
  
//     const files = fs.readdirSync(absoluteFolderPath);
  
//     const questionsAndAnswers = files.map((file, index) => {
//       const filePath = path.join(absoluteFolderPath, file);
//       const fileContent = fs.readFileSync(filePath, 'utf-8');
  
//       const $ = load(fileContent);
//       const question = $('question').text().trim();
//       const answer = $('answer').text().trim();
  
//       return {
//         content: `${index + 1}. ${question}: ${answer}`,
//       };
//     });
  
//     return questionsAndAnswers;
//   };
  
