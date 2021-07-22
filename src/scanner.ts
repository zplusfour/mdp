import colors from 'colors';

class Scanner {
  __data: string;

  constructor(__data: string) {
    this.__data = __data;
  }

  scan() {
    const data = this.__data;
    const spl = data.split('\n');
    const o = [];

    for (let bl of spl) {
      if (bl.startsWith('# ')) {
        bl = bl.replace('# ', '')
        bl = `${bl}`.blue
        o.push(bl);
      } else {
        continue;
      }
    }

    let oq = "";
    for (let q of o) {
      oq += q + "\n";
    }
    return oq;
  }
}

export default Scanner;