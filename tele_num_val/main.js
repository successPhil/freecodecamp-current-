function telephoneCheck(str) {
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;
      return regex.test(str);
    }
    telephoneCheck("555-555-5555");

/*
This function uses a regular expression to match the phone number format. Here's a breakdown of the regular expression:

^: Matches the start of the string
(1\s?)?: Matches an optional country code of "1" followed by an optional space
(\(\d{3}\)|\d{3}): Matches a three-digit area code enclosed in parentheses, or just a three-digit area code
[- ]?: Matches an optional dash or space
\d{3}: Matches three digits
[- ]?: Matches an optional dash or space
\d{4}: Matches four digits
$: Matches the end of the string            
*/