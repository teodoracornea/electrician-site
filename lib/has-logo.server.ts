import fs from "node:fs";
import path from "node:path";

export function checkHasLogoFile() {
  return fs.existsSync(path.join(process.cwd(), "public", "logo.jpg"));
}
