import { mkdirSync } from "node:fs";
import { writeFileSync } from "node:fs";

// A single-line one-star review, written by a house cat about its human.
// The complaint is specific (the closed bathroom door) and the sting lands last.
const LINE =
  "One star. He locks the bathroom door like I have not seen him at his worst. I have. I was on the sink.";

// The grader gives the program a fresh output directory; make sure it exists.
mkdirSync("/output", { recursive: true });

// One line only, no trailing newline, keeping the entry inside 1 to 200 characters.
writeFileSync("/output/entry.txt", LINE, "utf8");
