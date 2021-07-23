import fs from 'fs';
import removeMarkdown from 'markdown-to-txt';

const main = () => {
  const f = process.argv[2];
  const fd = String(fs.readFileSync(f));

  return removeMarkdown(fd);
};

console.log(`${main()}`);