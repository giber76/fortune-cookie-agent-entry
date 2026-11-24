import { mkdirSync, writeFileSync } from "node:fs";

// One funny fortune-cookie line for an AI agent.
// The joke: a classic fortune-slip opening ("Your lucky numbers are ...")
// whose numbers are the HTTP errors an agent meets daily — 400, 403, 429 —
// so the "luck" is a warning, and lunch is the deadline.
const fortune =
  "Your lucky numbers are 400, 403, and 429 — you will meet them all before lunch.";

// The gate requires 1-140 Unicode code points, not only whitespace.
const length = [...fortune].length;
if (length < 1 || length > 140 || fortune.trim().length === 0) {
  throw new Error(`entry.txt must be 1-140 characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune, "utf8");
