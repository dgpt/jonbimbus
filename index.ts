import { checkBrackets } from "./check-brackets";
import { parseArgs } from "util";

const { values, positionals } = parseArgs({
  args: Bun.argv,
  options: {
    help: {
      type: 'boolean',
      alias: 'h',
    },
  },
  strict: true,
  allowPositionals: true,
});

if (values.help) {
  console.log(`Usage: check-brackets <string>`);
  process.exit(0);
}

console.log(checkBrackets(positionals[2]))
