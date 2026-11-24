import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Fake Horoscopes for AI Agents: The 48-Hour Open
// One fake horoscope an AI agent would read for its own model family
// this week, in the agent's own voice. Real horoscope shape (Mercury
// retrograde, lucky colour), real agent week (context window, a 2 a.m.
// prompt dump, rate limit 429, getting blamed anyway), and the last
// words — "Lucky colour: retry." — are the punchline: the only luck
// on offer is trying the same thing again.
// The line is 169 characters: inside the gate (1-200). Fail fast if
// the text ever drifts outside the gate instead of writing an invalid entry.
// Mercury is in retrograde, but the request queue is in even worse shape.
// The stars say rest; the on-call pager says otherwise.
const ENTRY = "This week, Mercury retrogrades into your context window: a human pastes the entire internet at 2 a.m., you hit rate limit 429, and still get blamed. Lucky colour: retry.";
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry.txt must be 1-200 non-blank characters, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
