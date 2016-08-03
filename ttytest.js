nodeUtil = require('util')
process.stdout.write(`${nodeUtil.inspect(process.stdin)}\n\n`);
if (process.stdin.isTTY)
  process.stdout.write("Is a TTY terminal!");
else 
  process.stdout.write("Not TTY terminal!");