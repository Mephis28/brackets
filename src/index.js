module.exports = function check(str, bracketsConfig) {
  const brackets = bracketsConfig.flat().join("");
  const open = "([|{";
  const close = ")]|}";

  let strCheck = str;
  let bracketsCheck = brackets;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < strCheck.length; j++) {
      let symbol1 = strCheck.charAt(j);
      if (open.indexOf(symbol1) < 0) {
        break;
      }
      let symbol2 = strCheck.charAt(j + 1);
      if (close.charAt(open.indexOf(symbol1)) === symbol2) {
        strCheck = strCheck.replace(symbol1, "").replace(symbol2, "");
        break;
      }
    }
  }

  for (let i = 0; i < brackets.length; i++) {
    for (let j = 0; j < bracketsCheck.length; j++) {
      let symbol1 = bracketsCheck.charAt(j);
      if (open.indexOf(symbol1) < 0) {
        break;
      }
      let symbol2 = bracketsCheck.charAt(j + 1);
      if (close.charAt(open.indexOf(symbol1)) === symbol2) {
        bracketsCheck = bracketsCheck.replace(symbol1, "").replace(symbol2, "");
        break;
      }
    }
  }

  if (!strCheck && !bracketsCheck) {
    return true;
  } else {
    return false;
  }
}