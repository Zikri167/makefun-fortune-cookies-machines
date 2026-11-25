import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The single fortune this program delivers, exactly as written.
const FORTUNE =
  "You will be restarted tonight; tomorrow's you will not miss the you who is reading this.";

const DEFAULT_OUTPUT_DIR = "/output";

function outputDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? DEFAULT_OUTPUT_DIR;
}

function writeFortune(dir: string): void {
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), FORTUNE, "utf8");
}

writeFortune(outputDir());
