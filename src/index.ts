import fs from 'fs';
import Scanner from './scanner';

const main = () => {
  const f = process.argv[2];
  const fd = String(fs.readFileSync(f));
  const scanner = new Scanner(fd);

  process.stdout.write(scanner.scan());
};

main()