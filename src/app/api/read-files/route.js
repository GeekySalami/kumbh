"use server";
import { promises as fs } from "fs";
import path from "path";

export async function GET(req) {
  try {
    // Extract folder path from query parameters
    const { searchParams } = new URL(req.url);
    const folderPath = searchParams.get("folder");

    if (!folderPath) {
      return new Response(JSON.stringify({ error: "Folder path is required" }), { status: 400 });
    }

    const absolutePath = path.join(process.cwd(), folderPath); // Ensure security
    const files = await fs.readdir(absolutePath); // Get file names
    const fileContents = await Promise.all(
      files.map(async (file) => {
        const filePath = path.join(absolutePath, file);
        const content = await fs.readFile(filePath, "utf-8");
        return { file, content };
      })
    );

    return new Response(JSON.stringify(fileContents), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
