const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  function exploseStr(str) {
    const numLetters = str.length / 10;
    const word = new Array(numLetters);

    for (let i = 0, o = 0; i < numLetters; ++i, o += 10) {
      word[i] = str.substr(o, 10);
    }

    return word;
  }

  let res = expr.split("**********");
  for (let i = 0; i < res.length; i++) {
    res[i] = exploseStr(res[i]);
    for (j = 0; j < res[i].length; j++) {
      res[i][j] = res[i][j]
        .slice(res[i][j].indexOf("1"))
        .replaceAll("10", ".")
        .replaceAll("11", "-");
      res[i][j] = MORSE_TABLE[res[i][j]];
    }
    res[i] = res[i].join("");
  }

  return res.join(" ");
}

module.exports = {
  decode,
};
