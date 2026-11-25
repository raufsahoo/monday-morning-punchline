// Monday Morning Punchlines: one joke about Monday mornings. Node 22, standard library only.
// Writes it to /output/entry.txt (MAKEFUN_OUTPUT_DIR stands in for /output locally).
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const joke = 'I hit snooze so hard on Monday morning that my alarm filed for workers\' comp.';

// The gate takes 1 to 200 characters: fail loudly rather than enter an invalid line.
if ([...joke].length > 200 || joke.trim() === '') throw new Error(`joke is ${[...joke].length} characters`);

writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt'), joke);
