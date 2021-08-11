export const ordinalWord = (word) => {

  const endsWithDoubleZeroPattern = /(hundred|thousand|(m|b|tr|quadr)illion)$/;

  const endsWithTeenPattern = /teen$/;

  const endsWithYPattern = /y$/;

  const endsWithZeroThroughTwelvePattern = /(Zero|One|Two|Three|Four|Five|Six|Seven|Eight|Nine|Ten|Eleven|Twelve)$/;

  const ordinalLessThanThirteen = {
    Zero: 'Zeroth',
    One: 'First',
    Two: 'Second',
    Three: 'Third',
    Four: 'Fourth',
    Five: 'Fifth',
    Six: 'Sixth',
    Seven: 'Seventh',
    Eight: 'Eighth',
    Nine: 'Ninth',
    Ten: 'Tenth',
    Eleven: 'Eleventh',
    Twelve: 'Twelfth'
  };

  const replaceWithOrdinalVariant = (match, numberWord) => {
    return ordinalLessThanThirteen[numberWord];
  };

  // Ends with *00 (100, 1000, etc.) or *teen (13, 14, 15, 16, 17, 18, 19)
  if (endsWithDoubleZeroPattern.test(word) || endsWithTeenPattern.test(word)) {
    return word + 'th';
    // Ends with *y (20, 30, 40, 50, 60, 70, 80, 90)
  } else if (endsWithYPattern.test(word)) {
    return word.replace(endsWithYPattern, 'ieth');
    // Ends with one through twelve
  } else if (endsWithZeroThroughTwelvePattern.test(word)) {
    return word.replace(endsWithZeroThroughTwelvePattern, replaceWithOrdinalVariant);
  };

  return word;

};
