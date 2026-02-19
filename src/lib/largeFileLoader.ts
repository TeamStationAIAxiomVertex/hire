import fs from "fs";
import path from "path";

/**
 * Read a large file in chunks of N lines.
 * Useful for big data structures like technologyskillscontent.ts
 */
export function readFileInChunks(
  fileName: string,
  linesPerChunk = 512,
): string[] {
  const filePath = path.join(process.cwd(), fileName);
  const data = fs.readFileSync(filePath, "utf8");
  const lines = data.split("\n");
  const chunks: string[] = [];

  for (let i = 0; i < lines.length; i += linesPerChunk) {
    chunks.push(lines.slice(i, i + linesPerChunk).join("\n"));
  }

  return chunks;
}

/**
 * Write back modified data safely.
 */
export function writeLargeFile(fileName: string, content: string): void {
  const filePath = path.join(process.cwd(), fileName);
  fs.writeFileSync(filePath, content, "utf8");
  console.log(`✅ Large file written successfully: ${filePath}`);
}
