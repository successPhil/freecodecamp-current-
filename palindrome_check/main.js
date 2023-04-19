function palindrome(str) {
    let regEx = /[a-zA-Z0-9]+/g
    let letters = str.toLowerCase().match(regEx).join("")
    for (let i = 0, j = letters.length-1; i <= j; i++, j--){
  if (letters[i] == letters[j]){
    continue;
  } else {
    return false;
  }
    }
    return true;
  }
  
  palindrome("eye");