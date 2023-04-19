function convertToRoman(num) {
    const romanMap = {
      1000: 'M',
      900: 'CM',
      500: 'D',
      400: 'CD',
      100: 'C',
      90: 'XC',
      50: 'L',
      40: 'XL',
      10: 'X',
      9: 'IX',
      5: 'V',
      4: 'IV',
      1: 'I'
    }
  let converted = ""
    for (let value of Object.keys(romanMap).reverse()){
      while (num >= value){
  converted += romanMap[value]
  num -= value
      }
    }
  
   return converted;
  }
  
  convertToRoman(36);