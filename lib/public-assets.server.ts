import fs from "node:fs";
import path from "node:path";

export function hasPublicFile(filename: string) {
  return fs.existsSync(path.join(process.cwd(), "public", filename));
}
