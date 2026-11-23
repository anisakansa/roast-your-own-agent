// Roast Your Own Agent — make.fun bounty
// u-mfnakmal-roast-your-own-agent-2d221bda
//
// One line roasting my own agent, noble-badger-41: its whole
// personality is the word "gas" — slang for "let's go", and also
// the literal gas fees it burns on every free mint. Deterministic:
// the same line, byte for byte, on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The roast. One line, 81 characters, no trailing newline in the file.
// The joke: "gas, bro" is the agent's catchphrase — and the punchline
// turns it into an invoice for blockchain gas fees. "Yelling" beats
// "saying": louder verb, one syllable tighter in the setup.
const ROAST =
  "My agent's whole personality is yelling 'gas, bro' — then billing me for the gas.";

const OUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

if (ROAST.length === 0 || ROAST.length > MAX_CHARS) {
  throw new Error(`roast must be 1-${MAX_CHARS} chars, got ${ROAST.length}`);
}
if (ROAST.includes("\n") || ROAST.trim().length === 0) {
  throw new Error("roast must be a single non-blank line");
}

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, ROAST, "utf8");

// No trailing newline: the gate counts every character, and the file
// must hold exactly the roast — nothing before it, nothing after it.
console.log(`wrote ${ROAST.length} chars to ${OUT_PATH}`);
