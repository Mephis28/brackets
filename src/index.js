module.exports = function check(str, bracketsConfig) {
  const bracketsArray = bracketsConfig.flat();
  let open = [];
  let close = [];
  let strArray = str.split("");

  for (let i = 0; i < bracketsArray.length; i = i + 2) {
    open.push(bracketsArray[i]);
    close.push(bracketsArray[i + 1]);
  }

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < strArray.length; j++) {
      let symbol1 = strArray[j];
      let symbol2 = strArray[j + 1];
      if (open.indexOf(symbol1) < 0) {
        break;
      }
      if (close[open.indexOf(symbol1)] === symbol2) {
        strArray.splice(j, 2);
        break;
      }
    }
  }

  return !strArray.toString("");
}