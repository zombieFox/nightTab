export const wordNumber = (number) => {

  const ten = 10;

  const oneHundred = 100;

  const oneThousand = 1000;

  const oneMillion = 1000000;

  const oneBillion = 1000000000; // 1,000,000,000 (9)

  const oneTrillion = 1000000000000; // 1,000,000,000,000 (12)

  const oneQuadrillion = 1000000000000000; // 1,000,000,000,000,000 (15)

  const max = 9007199254740992; // 9,007,199,254,740,992 (15)

  const lessThanTwenty = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];

  const tenthsLessThanHundred = ['Zero', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];


  const generateWords = function(number) {

    let remainder;

    let word;

    let words = arguments[1];

    // We’re done
    if (number === 0) {
      return !words ? 'Zero' : words.join(' ').replace(/,$/, '');
    };

    // First run
    if (!words) {
      words = [];
    };

    // If negative, prepend “minus”
    if (number < 0) {
      words.push('minus');
      number = Math.abs(number);
    };

    if (number < 20) {
      remainder = 0;
      word = lessThanTwenty[number];
    } else if (number < oneHundred) {
      remainder = number % ten;
      word = tenthsLessThanHundred[Math.floor(number / ten)];
      // In case of remainder, we need to handle it here to be able to add the “-”
      if (remainder) {
        word += '-' + lessThanTwenty[remainder];
        remainder = 0;
      };
    } else if (number < oneThousand) {
      remainder = number % oneHundred;
      word = generateWords(Math.floor(number / oneHundred)) + ' Hundred';
    } else if (number < oneMillion) {
      remainder = number % oneThousand;
      word = generateWords(Math.floor(number / oneThousand)) + ' Thousand,';
    } else if (number < oneBillion) {
      remainder = number % oneMillion;
      word = generateWords(Math.floor(number / oneMillion)) + ' Million,';
    } else if (number < oneTrillion) {
      remainder = number % oneBillion;
      word = generateWords(Math.floor(number / oneBillion)) + ' Billion,';
    } else if (number < oneQuadrillion) {
      remainder = number % oneTrillion;
      word = generateWords(Math.floor(number / oneTrillion)) + ' Trillion,';
    } else if (number <= max) {
      remainder = number % oneQuadrillion;
      word = generateWords(Math.floor(number / oneQuadrillion)) + ' Quadrillion,';
    };

    words.push(word);

    return generateWords(remainder, words);
  };

  var num = parseInt(number, 10);

  return generateWords(num);
};
