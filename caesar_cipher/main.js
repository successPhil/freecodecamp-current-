function rot13(str) {
    let decoded = ""
    for (let i = 0; i < str.length; i++){
  let charCode = str.charCodeAt(i)
  if (charCode >= 65 && charCode <= 90){
    charCode = ((charCode - 65 + 13) % 26) + 65
  }
  decoded += String.fromCharCode(charCode)
    }
    console.log(decoded)
    return decoded;
  }
  
  rot13("SERR PBQR PNZC");