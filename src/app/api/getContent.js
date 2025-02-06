
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { folderPath } = req.query;  // Get folder path from query

  if (!folderPath) {
    console.log(folderPath);
    return res.status(400).json({ error: 'Folder path is required' });
  }

  // Get the absolute path of the folder
  const absoluteFolderPath = path.join(process.cwd(), folderPath);
  console.log(absoluteFolderPath);

  try {
    // Check if the folder exists
    if (!fs.existsSync(absoluteFolderPath)) {
      return res.status(404).json({ error: 'Folder not found' });
    }

    // Read files in the folder
    const files = fs.readdirSync(absoluteFolderPath);

    // Return the files in an array
    res.status(200).json({ files });
  } catch (error) {
    console.error('Error reading files:', error);
    res.status(500).json({ error: 'Failed to read files' });
  }
}
